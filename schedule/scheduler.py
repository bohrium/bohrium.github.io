# author: samtenka
# change: 2018-01-21
# create: 2018-01-21
# descrp: generate html table for schedule

with open('schedule.data') as f:
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

with open('../schedule.html', 'w') as f:
    f.write(text.replace('TABLE', print_table(lines)))

