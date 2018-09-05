# author: samtenka
# change: 2018-02-24
# create: 2018-01-21
# descrp: generate html table for schedule
# usage: Ensure the following files are in your directory:
#            A. scheduler.py
#            B. schedule.data
#            C. schedule_template.html 
#        Then run `python scheduler.py schedule.data NAME_OF_OUTPUT_FILE.html` 
#
#        Note that cell colors are denoted by a single-character prefix
#        among (b(lue), g(reen), c(yan), r(ed), m(agenta), and y(ellow)).
#        Use underscores instead of spaces in cell names.  See an sample 
#        schedule, for instance `schedule_2018-02-17.data`, for illustrations.

from sys import argv
in_name, out_name = argv[1:3]

with open(in_name) as f:
    lines = filter(None, f.read().split('\n'))[1:]

def print_cell(token):
    color, text = token[0], token[1:].replace('_', ' ') 
    bg_color, fg_color, style = {
        '.':('',       '#888888','font-variant: small-caps'),
        'b':('#aaaaff','#888888','')                        ,
        'g':('#aaffaa','#888888','')                        ,
        'c':('#aaffff','#888888','')                        ,
        'r':('#ffaaaa','#888888','')                        ,
        'm':('#ffaaff','#888888','')                        ,
        'y':('#ffffaa','#888888','')                        ,
        'B':('#aaaaff','#000000','font-weight: bold')       ,
        'G':('#aaffaa','#000000','font-weight: bold')       ,
        'C':('#aaffff','#000000','font-weight: bold')       ,
        'R':('#ffaaaa','#000000','font-weight: bold')       ,
        'M':('#ffaaff','#000000','font-weight: bold')       ,
        'Y':('#ffffaa','#000000','font-weight: bold')       ,
    }[color]
    return '\n    <td bgcolor="%s" style="color:%s;%s">%s</td>' % (bg_color, fg_color, style, text)
    
def print_line(line):
    rtrn = '\n<tr>'
    toks = line.strip().split()
    time = toks[0]
    rtrn += '\n    <td>%s</td>' % time
    for tok in toks[1:]:
        rtrn += print_cell(tok) 
    return rtrn + '\n</tr>'

def print_table(lines):
    rtrn = ''
    for line in lines:
        rtrn += print_line(line)
    return rtrn

with open('schedule_template.html') as f:
    text = f.read()

with open(out_name, 'w') as f:
    f.write(text.replace('TABLE', print_table(lines)))

