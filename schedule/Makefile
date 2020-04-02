all:
	python2 scheduler.py schedule.data schedule_table.html
	python2 scheduler.py schedule_next.data schedule_next_table.html
	python2 scheduler.py schedule_next_next.data schedule_next_next_table.html
	python2 scheduler.py schedule_next_next_next.data schedule_next_next_next_table.html
	python2 scheduler.py schedule_generic.data schedule_generic_table.html

move:
	mv -i schedule_next.data schedule.data
	mv -i schedule_next_next.data schedule_next.data
	mv -i schedule_next_next_next.data schedule_next_next.data
	cp -i schedule_generic.data schedule_next_next_next.data
