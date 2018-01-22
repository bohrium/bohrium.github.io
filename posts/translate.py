''' author: samtenka
    create: 2017-12-31
    change: 2017-12-22
    descr: implement an interpreter for Mookdown (my own markdown variant)
    usage: run `python translate.py INFILE.mookdown OUTFILE.html` 
           e.g.`python translate.py language.mookdown language.html` 
'''

from sys import argv

def translate_line(line):
    ''' Convert a line of Mookdown into html'''
    style_flags = {'*':False, '`':False, '%':False, '~':False}
    style_tags  = {'*':'b',   '`':'tt',  '%':'em' , '~':'del'}
    def process_special_char(c):
        style_flags[c] = not style_flags[c]
        return '<%s%s>' % ('' if style_flags[c] else '/', style_tags[c])
 
    html = ''
    # a. translate: 
    for c in line:
        if c in style_flags: html += process_special_char(c)
        else: html += c
    # b. clean up unclosed styles:
    for c in style_flags:
        if style_flags[c]: html += process_special_char(c)
    return html

def translate(text):
    ''' Convert Mookdown source into a full html file '''
    template = open('template.html').read()
    html = ''
    for line in text.split('\n'):
        if not line.strip(): html += '\n<p>' 
        elif line[0]=='#': continue
        elif line[0]=='!':
            for i,c in enumerate(line):
                if c!='!': break
            html += '\n<h%d> %s </h%d>' % (i, translate_line(line[i:]), i)
        elif line[0]=='[':
            url, text = line[1:-1].split('][')
            if url.split('.')[-1] in ('jpg', 'png'):
                html += '\n<figure style="text-align:center"><img src="%s" alt="%s"></figure><figcaption style="text-align:center">%s</figcaption>' % (url, text, text)
            else:
                html += '\n<a href="%s">%s</a>' % (url, text)
        elif line[0]=='$':
            html += '\n' + line
        else: html += '\n' + translate_line(line)
    return template.replace('BODY', html)

if __name__=='__main__':
    infile, outfile = argv[1:]
    html = translate(open(infile).read())
    open(outfile, 'w').write(html)
