JFLAGS = -g
JC = javac
.SUFFIXES: .java .class
.java.class:
	$(JC) $(JFLAGS) $*.java

CLASSES = \
	Main.java \
	Hello.java

default: classes

classes: $(CLASSES:.java=.class)

clean:
	rm -f *.class
