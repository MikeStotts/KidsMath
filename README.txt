BUGS!!

If the user quits on the first question a division by zero error occurs in km_results.php

Ugly, ugly pages. I could probably spend a week making them not so ugly.

Ugly, ugly code. It could use a run through a prettifier. It doesn't
help that the smart vim editor is smarter than me. It has its own ideas
on indentng.

Lots of dead code. some is commented out. some is just not used. some
of might still be used on a (possible) latter iteration. An example of
commented out code is all the code for division problems. an example of
unused code this basename code in a couple of pages.

I am not certain about the timezone string for the dates in the results
log. It doesn't look right to me.

I was finally able to get rid of the "0 0/1" style numbers in the problems. however,
haven't cleaned it up in some of the dialogs.

I am happy about my use of hidden input fields as a way of passing
data around without using cookies. I did use one cookie just to get
some practice.

