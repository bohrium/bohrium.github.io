# author: samtenka
# change: 2022-04-27
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

import random
from sys import argv
in_name, out_name = argv[1:3]

with open(in_name) as f:
    lines = list(filter(None, f.read().split('\n')))[1:]

def print_cell(token):
    color, text = token[0], token[1:].replace('_', ' ') 
    height, text = (1, text) if '@' not in text else (int(text.split('@')[1]), text.split('@')[0])
    bg_color, fg_color, style = {
        '.':('',       '#888888','font-variant: small-caps'),
        'b':('#ccccee','#888888','')                        ,
        'g':('#cceecc','#888888','')                        ,
        'c':('#cceeee','#888888','')                        ,
        'r':('#eecccc','#888888','')                        ,
        'm':('#eeccee','#888888','')                        ,
        'y':('#eeeecc','#888888','')                        ,
        'a':('#d0d0d0','#ffffff','font-variant: small-caps'),
        'B':('#ccccee','#000000','font-weight: bold')       ,#'#8888ff'
        'G':('#cceecc','#000000','font-weight: bold')       ,#'#88ff88'
        'C':('#cceeee','#000000','font-weight: bold')       ,#'#88ffff'
        'R':('#eecccc','#000000','font-weight: bold')       ,#'#ff8888'
        'M':('#eeccee','#000000','font-weight: bold')       ,#'#ff88ff'
        'Y':('#eeeecc','#000000','font-weight: bold')       ,#'#ffff88'
    }[color]
    return '\n    <td bgcolor="%s" style="color:%s;%s" rowspan=\"%d\">%s</td>' % (bg_color, fg_color, style, height, text)
    
def print_line(line):
    rtrn = '\n<tr>'
    toks = line.strip().split()
    #time = toks[0]
    #rtrn += '\n    <td>%s</td>' % time
    #for tok in toks[1:]:
    for tok in toks:
        rtrn += print_cell(tok) 
    return rtrn + '\n</tr>'

def print_table(lines):
    rtrn = ''
    for line in lines:
        rtrn += print_line(line)
    return rtrn

with open('schedule_table_template.html') as f:
    text = f.read()

with open(out_name, 'w') as f:
    f.write(text.replace('TABLE', print_table(lines)))

