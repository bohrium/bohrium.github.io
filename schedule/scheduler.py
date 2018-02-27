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
    color_code = {
        '.':'',
        'b':'#aaaaff',
        'g':'#aaffaa',
        'c':'#aaffff',
        'r':'#ffaaaa',
        'm':'#ffaaff',
        'y':'#ffffaa'
    }[color]
    return '\n    <td bgcolor="%s">%s</td>' % (color_code, text)
    
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

