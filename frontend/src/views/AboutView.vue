<template>
  <div class="about">
    <br />
    <h1>Wofür ist diese Seite eigentlich?</h1>
    <br />
    <p>
      Es gibt immer mehr Nutzungsanwendungen, die größere Mengen Strom benötigen. Dabei ist es egal,
      ob ein Unternehmen größere Batchanwendungen oder Berechnungen laufen lassen muss oder ob man
      einfach zu Hause sein elektrisches Fahrzeug laden möchte. Bei vielen dieser Anwendungen ist es
      eigentlich egal zu welcher Uhrzeit man den Strom verbraucht und da wäre es sinnvoll den
      ökonomischen und vor Allem ökologischen Fußabdruck im Blick zu behalten.
    </p>
    <br />
    <p>
      Dieses Projekt soll dabei helfen, den Zeitpunkt zu finden, zu dem der Strom in Deutschland am
      grünsten ist, d.h. der Zeitpunkt mit dem höchsten Anteil an erneuerbarer Energieerzeugung.
      Dazu werden die Daten der letzten 4 Wochen ausgewertet und der Zeitpunkt mit dem größten
      Anteil an erneuerbarer Energie ermittelt. Außerdem wird die Zeitspanne angezeigt, in der der
      Anteil an erneuerbarer Energie am größten ist. Die Daten dafür kommen direkt von der API des
      Bundes (https://github.com/bundesAPI/smard-api)
    </p>
  </div>
</template>

<style>
.about {
  display: block;
}
h1 {
  text-align: center;
}
</style>
