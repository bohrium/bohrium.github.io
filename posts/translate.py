''' author: samtenka
    create: 2018-03-20
    change: 2017-12-22
    descr: implement an interpreter for Mookdown (my own markdown variant)
    usage: run `python translate.py NAME` 
           e.g.`python translate.py language` in order to translate
            `language.mookdown` into `language.html`
'''

from sys import argv

def translate_link(source):
    assert(source[0]=='<')
    assert(source[-1]=='>')
    url, text = source[1:-1].split('|')

    if url.split('.')[-1] in ('jpg', 'png'):
        return '\n<figure style="text-align:center"><img src="%s" alt="%s"></figure><figcaption style="text-align:center">%s</figcaption>' % (url, text, translate_line(text)) 
    else:
        return '\n<a href="%s">%s</a>' % (url, translate_line(text)) 

def translate_line(line):
    ''' Convert a line of Mookdown into html'''
    style_flags = {'*':False, '`':False, '%':False, '~':False}
    style_tags  = {'*':'b',   '`':'tt',  '%':'em' , '~':'del'}
    def process_special_char(c):
        style_flags[c] = not style_flags[c]
        return '<%s%s>' % ('' if style_flags[c] else '/', style_tags[c])

    html = ''

    # a. translate: 
    i = 0
    while i != len(line):
        c = line[i]
        if c=='<':
            source = line[i:1+i+line[i:].find('>')]
            html += translate_link(source)
            i += len(source)-1
        elif c in style_flags:
            html += process_special_char(c)
        else:
            html += c
        i += 1

    # b. clean up unclosed styles:
    for c in style_flags:
        if style_flags[c]: html += process_special_char(c)

    return html

def translate(text):
    ''' Convert Mookdown source into a full html file '''
    template = open('template.html').read()
    html = ''
    for line in text.split('\n'):
        if not line.strip():
            html += '\n<p>' 
        elif line[0]=='#':
            continue
        elif line[0]=='!':
            for i,c in enumerate(line):
                if c!='!': break
            html += '\n<h%d> %s </h%d>' % (i+1, translate_line(line[i:]), i+1)
        elif line[0]=='$':
            html += '\n' + line
        else:
            html += '\n' + translate_line(line)
    return template.replace('BODY', html)

if __name__=='__main__':
    NAME, = argv[1:]
    INFILE, OUTFILE = '%s.mookdown'%NAME, '%s.html'%NAME
    html = translate(open(INFILE).read())
    open(OUTFILE, 'w').write(html)
    print('translated %s into %s' % (INFILE, OUTFILE))
