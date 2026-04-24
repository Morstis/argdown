<argdown-map initialView="map"
	><div slot="source" class="">
		<pre class="language-argdown"><code class="language-argdown"
				><span class="hljs-meta"
					>===
title: A Stylized Reconstruction of the Scientific Debate
    That led Ignaz Semmelweis to Understand Childbed Fever
author: Gregor Betz
date: 19/10/2018
model:
    mode: strict
dot:
    graphVizSettings:
      &quot;rankdir&quot;: &quot;TB&quot;
      &quot;ranksep&quot;: &quot;1&quot;
===</span
				>


<span class="hljs-section"># Three Rival Hypotheses</span>

<span class="hljs-comment"
					>/* Semmelweis and his colleagues considered three
explanations for the outbreak of so-called childbed fever
in their Vienna hospital: */</span
				>

<span class="hljs-statement-title">[Epidemic Influence Hypothesis]:</span> The outbreak of childbed
fever is controlled by epidemic influences. <span class="hljs-tag">#H1</span>

<span class="hljs-statement-title">[Rough Examination Hypothesis]:</span> The outbreak of childbed
fever is controlled by injuries that stem from incompetent
examinations. <span class="hljs-tag">#H2</span>

<span class="hljs-statement-title">[Cadavric Substance Hypothesis]:</span> The outbreak of childbed
fever is controlled by the degree of contamination with
cadavric substance. <span class="hljs-tag">#H3</span>

<span class="hljs-comment">/* The explanations were understood to be rivals: */</span>

<span class="hljs-statement-title">[Epidemic Influence Hypothesis]</span>
<span class="hljs-attack">  -&gt;</span> <span class="hljs-statement-title"
					>[Rough Examination Hypothesis]</span
				>     <span class="hljs-comment">// H1 and H2 are contrary</span>
<span class="hljs-attack">  -&gt;</span> <span class="hljs-statement-title"
					>[Cadavric Substance Hypothesis]</span
				>    <span class="hljs-comment">// H1 amd H3 are contrary</span>

<span class="hljs-statement-title">[Rough Examination Hypothesis]</span>
<span class="hljs-attack">  -&gt;</span> <span class="hljs-statement-title"
					>[Cadavric Substance Hypothesis]</span
				>    <span class="hljs-comment">// H2 and H3 are contrary</span>


<span class="hljs-section"># Evidence</span>

<span class="hljs-comment"
					>/* The following items of evidence were considered to be
relevant for deciding which of the three hypotheses is
correct. */</span
				>

<span class="hljs-statement-title">[Difference Between Divisions]:</span> By default, more women
contract childbed fever in the First than in the Second
Division of the hospital.

<span class="hljs-statement-title">[Washing Helps]:</span> If the students who examine the women in
the First Division disinfect their hands, the ratio of
women contracting childbed fever is the same in both
divisions.

<span class="hljs-statement-title">[Death of Kolletschka]:</span> A colleague of Semmelweis suffered
from symptoms similar to childbed fever and eventually died.

<span class="hljs-statement-title">[Birth at Home]:</span> The mortality of women who give birth at
home or on their way to the hospital is significantly lower
than in the First Division.

<span class="hljs-statement-title">[No Variations]:</span> Cases of childbed fever and corresponding
mortality rates do not display spatio-temporal variations
(e<span class="hljs-tag">.g.</span> seasonal, or from district to district) that are
characteristic for epidemic diseases.


<span class="hljs-section"># Arguments and Further Theses </span>

<span class="hljs-comment"
					>/* The arguments reconstructed in this section detail
whether the three hypotheses can explain or whether they
conflict with the available evidence. Arguments are tagged
according to whether the lay out explanatory relations or
conflicts of hypothesis H1, H2, and H3. In addition to
these arguments, the section makes further auxiliary
assumptions explicit. */</span
				>


<span class="hljs-section">## Inferential Relations between </span>
@<span class="hljs-statement-title">[Epidemic Influence Hypothesis]</span> and the
Available Evidence <span class="hljs-meta"></span>

<span class="hljs-comment"
					>/* Relying on a crucial auxiliary assumption, H1 can
explain various pieces of evidence. Yet it conflicts with
observation @[No Variations]. */</span
				>

<span class="hljs-statement-title">[Difference in Exposure]:</span> Women in the First Division are
exposed to epidemic diseases more heavily than those who
give birth at home, on their way to the hospital, or in the
Second Division. <span class="hljs-tag">#H1</span> <span class="hljs-tag">#aux</span>


<span class="hljs-argument-title">&lt;Epidemic Exposition 1&gt;:</span
				> Women in the First Division are
exposed to epidemic diseases more heavily than those in the
Second Divison. <span class="hljs-tag">#H1</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Epidemic Influence Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span> <span class="hljs-statement-title"
					>[Difference in Exposure]</span
				>
<span class="hljs-argument-statement-nr">  (3)</span
				> If childbed fever is controlled by infections and
  women of one group are more frequently infected than
  those in another group, than members of the first group
  will catch childbed fever more frequently.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (4)</span> <span class="hljs-statement-title"
					>[Difference Between Divisions]</span
				>


<span class="hljs-argument-title">&lt;Epidemic Exposition 2&gt;:</span
				> Women in the First Division are
exposed to epidemic diseases more heavily than those who
give birth at home or on their way to the hospital. <span class="hljs-tag">#H1</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Epidemic Influence Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span> <span class="hljs-statement-title"
					>[Difference in Exposure]</span
				>
<span class="hljs-argument-statement-nr">  (3)</span
				> If childbed fever is controlled by infections and
  women of one group are more frequently infected than
  those in another group, than members of the first group
  will catch childbed fever more frequently.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (4)</span> <span class="hljs-statement-title"
					>[Birth at Home]</span
				>


<span class="hljs-argument-title">&lt;Epidemic Variations&gt;:</span
				> If caused by epidemic diseases,
childbed fever would show characteristic variations. <span class="hljs-tag">#H1</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Epidemic Influence Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span
				> If childbed fever is controlled by infections, then
  it displays spatio-temporal variations (e<span class="hljs-tag">.g.</span> seasonal, or
  from district to district) that are characteristic for
  epidemic diseases.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (3)</span
				> Cases of childbed fever and corresponding mortality
  rates display spatio-temporal variations (e<span class="hljs-tag">.g.</span> seasonal,
  or from district to district) that are characteristic for
  epidemic diseases.
<span class="hljs-attack">    -&gt;</span> <span class="hljs-statement-title">[No Variations]</span>


<span class="hljs-section">## Inferential Relations between </span>
@<span class="hljs-statement-title">[Rough Examination Hypothesis]</span> and
the Available Evidence <span class="hljs-meta"></span>

<span class="hljs-comment"
					>/* Hypothesis H2 provides an explanation of a single
evidence item; however, the explanation builds on highly
contest assumptions (as the attacks on the premises make
explicit). */</span
				>

<span class="hljs-argument-title">&lt;Inexperienced Medical Students&gt;:</span> Women in the First
Division are examined by medical students who, because of
their inexperience, cause more injuries due to rough
examinations than midwives. <span class="hljs-tag">#H2</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Rough Examination Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span> <span class="hljs-statement-title"
					>[Medical Students vs Midwives]:</span
				> Women in the First
  Division are examined by medical students, women in the
  Second Division by midwives.
<span class="hljs-argument-statement-nr">  (3)</span> <span class="hljs-statement-title"
					>[More Injuries]:</span
				> Due to their inexperience, medical
  students cause more injuries during examination than
  midwives. <span class="hljs-tag">#H2</span>
<span class="hljs-argument-statement-nr">  (4)</span
				> If childbed fever is caused by injuries and women in
  one group are examined by persons who inflict more
  injuries than those persons which examine women in
  another group, then members of the former group will
  suffer from childbed fever more frequently.
<span class="hljs-attack">    -</span> <span class="hljs-statement-title"
					>[Examination Injuries Insignificant]:</span
				> Difference in
    examination doesn&#x27;t entail difference in childbed fever.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (5)</span> <span class="hljs-statement-title"
					>[Difference Between Divisions]</span
				>


<span class="hljs-argument-title">&lt;Medical Students Skillfull&gt;:</span
				> Medical students are no less
skillfull than midwives and carry out the examinations in
approximately the same way.

<span class="hljs-argument-statement-nr">  (1)</span
				> Medical students are no less skillfull than midwives
  and carry out the examinations in approximately the same
  way.
<span class="hljs-argument-statement-nr">  (2)</span> If medical students are no less skillfull than
  midwives and carry out the examinations in approximately
  the same way, then they cause no more injuries during
  examination than midwives.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (3)</span
				> Medical students don&#x27;t cause more injuries during
  examination than midwives.
<span class="hljs-contradiction">    &gt;&lt;</span> <span class="hljs-statement-title"
					>[More Injuries]</span
				>


<span class="hljs-argument-title">&lt;Main Injuries due to Birth&gt;:</span
				> The main injuries that women
suffer are due to giving birth itself and not to previous
or posterior examinations.

<span class="hljs-argument-statement-nr">  (1)</span
				> The main injuries that women suffer are due to giving
  birth itself and not to previous or posterior
  examinations.
<span class="hljs-argument-statement-nr">  (2)</span
				> If injuries that stem from examinations are much less
  severe than the injuries which stem from giving birth
  itself, all women that give birth, no matter whether they
  have been examined roughly or not, will suffer from the
  same degree of injuries.
<span class="hljs-argument-statement-nr">  (3)</span
				> If all women who give birth, no matter whether they
  have been examined roughly or not, will suffer from the
  same degree of injuries, then difference in examination
  doesn&#x27;t entail difference in childbed fever (i<span class="hljs-tag">.e.</span>, it is
  not the case that, provided childbed fever is caused by
  injuries and women in one group are examined by persons
  who inflict more injuries than those persons which
  examine women in another group, members of the former
  group will suffer from childbed fever more frequently).
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (4)</span> <span class="hljs-statement-title"
					>[Examination Injuries Insignificant]</span
				>


<span class="hljs-section">## Inferential Relations between </span>
@<span class="hljs-statement-title">[Cadavric Substance Hypothesis]</span> and
the Available Evidence <span class="hljs-meta"></span>

<span class="hljs-comment"
					>/* Hypothesis H3 accounts for four of the five evidence
items; it doesn&#x27;t contradict any observation. @[Cadavric
Substance Hypothesis] is therefore by far the best
explanation for the available evidence. */</span
				>

<span class="hljs-argument-title">&lt;Medical Students Contaminate 1&gt;:</span
				> Medical students, who
carry out examinations in the First but not in the Second
Division, contaminate the women with cadavric substance.
<span class="hljs-section">#H3 </span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Cadavric Substance Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span> <span class="hljs-statement-title"
					>[Medical Students vs Midwives]:</span
				> Women in the First
  Division are examined by medical students, women in the
  Second Division by midwives.
<span class="hljs-argument-statement-nr">  (3)</span
				> Medical students are, by default and unlike midwives,
  stained with cadavric substance and contamine the persons
  they examine.
<span class="hljs-argument-statement-nr">  (4)</span
				> If childbed fever is caused by contamination with
  cadavric substance and if women in one group are
  contaminated to a higher degree than women in another
  group, then members of the former group will suffer from
  childbed fever more frequently.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (5)</span> <span class="hljs-statement-title"
					>[Difference Between Divisions]</span
				>


<span class="hljs-argument-title">&lt;Medical Students Contaminate 2&gt;:</span
				> Medical students, who
carry out examinations, contaminate the women in the First
Division with cadavric substance, yet not those who give
birth at home. <span class="hljs-tag">#H3</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Cadavric Substance Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span
				> Women in the First Division are examined by medical
  students, women who give birth at home or on their way to
  the hospital not.
<span class="hljs-argument-statement-nr">  (3)</span> Medical students are, by default, stained with
  cadavric substance and contaminate the persons they
  examine.
<span class="hljs-argument-statement-nr">  (4)</span
				> If childbed fever is caused by contamination with
  cadavric substance and if women in one group are
  contaminated to a higher degree than women in another
  group, then members of the former group will suffer from
  childbed fever more frequently.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (5)</span> <span class="hljs-statement-title"
					>[Birth at Home]</span
				>


<span class="hljs-argument-title">&lt;Washing Blocks Contamination&gt;:</span
				> Disinfecting, by preventing
contamination with cadavric substance, reduces the ratio of
women who suffer from childbed fever. <span class="hljs-tag">#H3</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Cadavric Substance Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span
				> If the students who examine the women in the First
  Division disinfect their hands, they reduce the extent to
  which they are stained with cadavric substance.
<span class="hljs-argument-statement-nr">  (3)</span
				> If the students who examine the women in the First
  Division reduce the extent to which they are stained with
  cadavric substance, and if childbed fever is caused by
  contamination with cadavric substance, then fewer persons
  examined by the students will suffer from childbed fever.
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (4)</span> <span class="hljs-statement-title"
					>[Washing Helps]</span
				>


<span class="hljs-argument-title">&lt;Kolletschka Contaminated&gt;:</span> Kolletschka was slightly
wounded during an autopsy and infected with cadavric
substance. <span class="hljs-tag">#H3</span>

<span class="hljs-argument-statement-nr">  (1)</span> <span class="hljs-statement-title"
					>[Cadavric Substance Hypothesis]</span
				>
<span class="hljs-argument-statement-nr">  (2)</span
				> Kolletschka was slightly wounded during an autopsy,
  and infected with cadavric substance.
<span class="hljs-argument-statement-nr">  (3)</span
				> If childbed fever is caused by contamination with
  cadavric substance and if a person is contaminated with
  cadavric substance, then the person will show symptoms
  similar to childbed fever (and eventually die).
<span class="hljs-inference">  ----</span>
<span class="hljs-argument-statement-nr">  (4)</span> <span class="hljs-statement-title"
					>[Death of Kolletschka]</span
				>



<span class="hljs-comment"
					>/***
 * Last tip: Try out another rendering of the argument
 * map by inserting, in the corresponding dot-file, as
 * new line below &quot;subgraph cluster_1
 *
***/</span
				>

</code></pre>
	</div>
	<div slot="map">
		<!-- Generated by graphviz version 2.47.0 (20210316.0004)
 -->
		<!-- Title: Argument Map Pages: 1 -->
		<svg
			width="720pt"
			height="316pt"
			viewBox="0.00 0.00 720.00 316.07"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<g id="graph0" class="graph" transform="scale(0.42 0.42) rotate(0) translate(4 750.4)">
				<title>Argument Map</title>
				<g id="clust1" class="cluster">
					<title>cluster_1</title>
					<polygon
						fill="#dadada"
						stroke="#dadada"
						points="1086.5,-346 1086.5,-738.4 1318.5,-738.4 1318.5,-346 1086.5,-346"
					/>
					<text
						text-anchor="start"
						x="1138.49"
						y="-723.6"
						font-family="arial"
						font-size="12.00"
						fill="#000000">Three Rival Hypotheses</text
					>
				</g>
				<g id="clust2" class="cluster">
					<title>cluster_2</title>
					<polygon
						fill="#dadada"
						stroke="#dadada"
						points="533.5,-8 533.5,-146.4 1609.5,-146.4 1609.5,-8 533.5,-8"
					/>
					<text
						text-anchor="start"
						x="1046.83"
						y="-131.6"
						font-family="arial"
						font-size="12.00"
						fill="#000000">Evidence</text
					>
				</g>
				<!-- n0 -->
				<g id="node1" class="node">
					<title>n0</title>
					<path
						fill="white"
						stroke="#d95f02"
						stroke-width="2"
						d="M1278.5,-708C1278.5,-708 1106.5,-708 1106.5,-708 1100.5,-708 1094.5,-702 1094.5,-696 1094.5,-696 1094.5,-668 1094.5,-668 1094.5,-662 1100.5,-656 1106.5,-656 1106.5,-656 1278.5,-656 1278.5,-656 1284.5,-656 1290.5,-662 1290.5,-668 1290.5,-668 1290.5,-696 1290.5,-696 1290.5,-702 1284.5,-708 1278.5,-708"
					/>
					<text
						text-anchor="start"
						x="1124.15"
						y="-694"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Epidemic Influence Hypothesis</text
					>
					<text
						text-anchor="start"
						x="1119.98"
						y="-677"
						font-family="arial"
						font-size="10.00"
						fill="#000000">The outbreak of childbed fever is</text
					>
					<text
						text-anchor="start"
						x="1105.54"
						y="-665"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						controlled by epidemic influences. #H1</text
					>
				</g>
				<!-- n1 -->
				<g id="node2" class="node">
					<title>n1</title>
					<path
						fill="white"
						stroke="#7570b3"
						stroke-width="2"
						d="M1278.5,-578C1278.5,-578 1106.5,-578 1106.5,-578 1100.5,-578 1094.5,-572 1094.5,-566 1094.5,-566 1094.5,-526 1094.5,-526 1094.5,-520 1100.5,-514 1106.5,-514 1106.5,-514 1278.5,-514 1278.5,-514 1284.5,-514 1290.5,-520 1290.5,-526 1290.5,-526 1290.5,-566 1290.5,-566 1290.5,-572 1284.5,-578 1278.5,-578"
					/>
					<text
						text-anchor="start"
						x="1122.76"
						y="-564"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Rough Examination Hypothesis</text
					>
					<text
						text-anchor="start"
						x="1119.98"
						y="-547"
						font-family="arial"
						font-size="10.00"
						fill="#000000">The outbreak of childbed fever is</text
					>
					<text
						text-anchor="start"
						x="1112.21"
						y="-535"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						controlled by injuries that stem from</text
					>
					<text
						text-anchor="start"
						x="1119.7"
						y="-523"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						incompetent examinations. #H2
					</text>
				</g>
				<!-- n0&#45;&gt;n1 -->
				<g id="edge1" class="edge">
					<title>n0&#45;&gt;n1</title>
					<path
						fill="none"
						stroke="#ff0000"
						d="M1192.5,-645.69C1192.5,-628.1 1192.5,-606.71 1192.5,-588.35"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="1189,-645.8 1192.5,-655.8 1196,-645.8 1189,-645.8"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="1196,-588.22 1192.5,-578.22 1189,-588.22 1196,-588.22"
					/>
				</g>
				<!-- n2 -->
				<g id="node3" class="node">
					<title>n2</title>
					<path
						fill="white"
						stroke="#e7298a"
						stroke-width="2"
						d="M1289.5,-430C1289.5,-430 1117.5,-430 1117.5,-430 1111.5,-430 1105.5,-424 1105.5,-418 1105.5,-418 1105.5,-366 1105.5,-366 1105.5,-360 1111.5,-354 1117.5,-354 1117.5,-354 1289.5,-354 1289.5,-354 1295.5,-354 1301.5,-360 1301.5,-366 1301.5,-366 1301.5,-418 1301.5,-418 1301.5,-424 1295.5,-430 1289.5,-430"
					/>
					<text
						text-anchor="start"
						x="1132.65"
						y="-416"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Cadavric Substance Hypothesis</text
					>
					<text
						text-anchor="start"
						x="1130.98"
						y="-399"
						font-family="arial"
						font-size="10.00"
						fill="#000000">The outbreak of childbed fever is</text
					>
					<text
						text-anchor="start"
						x="1142.92"
						y="-387"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						controlled by the degree of</text
					>
					<text
						text-anchor="start"
						x="1115.15"
						y="-375"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						contamination with cadavric substance.</text
					>
					<text
						text-anchor="start"
						x="1191.55"
						y="-363"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						#H3
					</text>
				</g>
				<!-- n0&#45;&gt;n2 -->
				<g id="edge2" class="edge">
					<title>n0&#45;&gt;n2</title>
					<path
						fill="none"
						stroke="#ff0000"
						d="M1242.59,-649.82C1264.4,-633.23 1287.65,-610.73 1299.5,-584 1313.19,-553.12 1311.01,-539.76 1299.5,-508 1289.91,-481.55 1271.28,-456.92 1252.97,-437.29"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="1240.32,-647.14 1234.33,-655.88 1244.46,-652.78 1240.32,-647.14"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="1255.44,-434.81 1245.98,-430.02 1250.39,-439.66 1255.44,-434.81"
					/>
				</g>
				<!-- n12 -->
				<g id="node13" class="node">
					<title>n12</title>
					<path
						fill="#d95f02"
						stroke="black"
						d="M187,-264C187,-264 12,-264 12,-264 6,-264 0,-258 0,-252 0,-252 0,-212 0,-212 0,-206 6,-200 12,-200 12,-200 187,-200 187,-200 193,-200 199,-206 199,-212 199,-212 199,-252 199,-252 199,-258 193,-264 187,-264"
					/>
					<text
						text-anchor="start"
						x="50.82"
						y="-250"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Epidemic Exposition 1</text
					>
					<text
						text-anchor="start"
						x="10.27"
						y="-233"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Women in the First Division are exposed</text
					>
					<text
						text-anchor="start"
						x="11.09"
						y="-221"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						to epidemic diseases more heavily than</text
					>
					<text
						text-anchor="start"
						x="23.31"
						y="-209"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						those in the Second Divison. #H1
					</text>
				</g>
				<!-- n0&#45;&gt;n12 -->
				<g id="edge15" class="edge">
					<title>n0&#45;&gt;n12</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1094.28,-675.59C899.42,-663.92 470.81,-633.4 332.5,-584 218.38,-543.24 162.49,-541.86 103.5,-436 75.54,-385.83 81.55,-317.29 89.62,-274.08"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="93.06,-274.7 91.58,-264.21 86.2,-273.33 93.06,-274.7"
					/>
				</g>
				<!-- n13 -->
				<g id="node14" class="node">
					<title>n13</title>
					<path
						fill="#d95f02"
						stroke="black"
						d="M404,-270C404,-270 229,-270 229,-270 223,-270 217,-264 217,-258 217,-258 217,-206 217,-206 217,-200 223,-194 229,-194 229,-194 404,-194 404,-194 410,-194 416,-200 416,-206 416,-206 416,-258 416,-258 416,-264 410,-270 404,-270"
					/>
					<text
						text-anchor="start"
						x="267.82"
						y="-256"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Epidemic Exposition 2</text
					>
					<text
						text-anchor="start"
						x="227.27"
						y="-239"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Women in the First Division are exposed</text
					>
					<text
						text-anchor="start"
						x="228.09"
						y="-227"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						to epidemic diseases more heavily than</text
					>
					<text
						text-anchor="start"
						x="238.92"
						y="-215"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						those who give birth at home or on</text
					>
					<text
						text-anchor="start"
						x="249.76"
						y="-203"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						their way to the hospital. #H1
					</text>
				</g>
				<!-- n0&#45;&gt;n13 -->
				<g id="edge16" class="edge">
					<title>n0&#45;&gt;n13</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1094.4,-676.43C884.33,-665.68 405.86,-635.74 354.5,-584 333.48,-562.82 322.45,-370.74 318.37,-280.03"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="321.87,-279.85 317.93,-270.01 314.88,-280.16 321.87,-279.85"
					/>
				</g>
				<!-- n14 -->
				<g id="node15" class="node">
					<title>n14</title>
					<path
						fill="#d95f02"
						stroke="black"
						d="M618.5,-264C618.5,-264 446.5,-264 446.5,-264 440.5,-264 434.5,-258 434.5,-252 434.5,-252 434.5,-212 434.5,-212 434.5,-206 440.5,-200 446.5,-200 446.5,-200 618.5,-200 618.5,-200 624.5,-200 630.5,-206 630.5,-212 630.5,-212 630.5,-252 630.5,-252 630.5,-258 624.5,-264 618.5,-264"
					/>
					<text
						text-anchor="start"
						x="488.33"
						y="-250"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Epidemic Variations</text
					>
					<text
						text-anchor="start"
						x="461.65"
						y="-233"
						font-family="arial"
						font-size="10.00"
						fill="#000000">If caused by epidemic diseases,</text
					>
					<text
						text-anchor="start"
						x="472.49"
						y="-221"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						childbed fever would show</text
					>
					<text
						text-anchor="start"
						x="465.55"
						y="-209"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						characteristic variations. #H1
					</text>
				</g>
				<!-- n0&#45;&gt;n14 -->
				<g id="edge17" class="edge">
					<title>n0&#45;&gt;n14</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1094.44,-676.19C892.04,-665.26 443.04,-635.43 397.5,-584 327.38,-504.8 352.74,-441.84 397.5,-346 412.21,-314.5 440.5,-288.69 467.39,-269.73"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="469.4,-272.59 475.68,-264.06 465.45,-266.82 469.4,-272.59"
					/>
				</g>
				<!-- n1&#45;&gt;n2 -->
				<g id="edge3" class="edge">
					<title>n1&#45;&gt;n2</title>
					<path
						fill="none"
						stroke="#ff0000"
						d="M1195.48,-503.76C1196.9,-484.14 1198.61,-460.59 1200.08,-440.25"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="1191.98,-503.65 1194.75,-513.87 1198.97,-504.15 1191.98,-503.65"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="1203.57,-440.49 1200.8,-430.26 1196.59,-439.98 1203.57,-440.49"
					/>
				</g>
				<!-- n15 -->
				<g id="node16" class="node">
					<title>n15</title>
					<path
						fill="#7570b3"
						stroke="black"
						d="M832.5,-276C832.5,-276 660.5,-276 660.5,-276 654.5,-276 648.5,-270 648.5,-264 648.5,-264 648.5,-200 648.5,-200 648.5,-194 654.5,-188 660.5,-188 660.5,-188 832.5,-188 832.5,-188 838.5,-188 844.5,-194 844.5,-200 844.5,-200 844.5,-264 844.5,-264 844.5,-270 838.5,-276 832.5,-276"
					/>
					<text
						text-anchor="start"
						x="675.37"
						y="-262"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Inexperienced Medical Students</text
					>
					<text
						text-anchor="start"
						x="677.05"
						y="-245"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Women in the First Division are</text
					>
					<text
						text-anchor="start"
						x="665.92"
						y="-233"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examined by medical students who,</text
					>
					<text
						text-anchor="start"
						x="663.7"
						y="-221"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						because of their inexperience, cause</text
					>
					<text
						text-anchor="start"
						x="687.04"
						y="-209"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						more injuries due to rough</text
					>
					<text
						text-anchor="start"
						x="669.26"
						y="-197"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examinations than midwives. #H2
					</text>
				</g>
				<!-- n1&#45;&gt;n15 -->
				<g id="edge18" class="edge">
					<title>n1&#45;&gt;n15</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1094.19,-533.91C1022.72,-521.17 927.79,-493.95 864.5,-436 832.35,-406.56 846.76,-384.06 825.5,-346 813.8,-325.07 799.16,-303.21 785.68,-284.37"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="788.47,-282.26 779.78,-276.21 782.8,-286.36 788.47,-282.26"
					/>
				</g>
				<!-- n18 -->
				<g id="node19" class="node">
					<title>n18</title>
					<path
						fill="#e7298a"
						stroke="black"
						d="M1046.5,-270C1046.5,-270 874.5,-270 874.5,-270 868.5,-270 862.5,-264 862.5,-258 862.5,-258 862.5,-206 862.5,-206 862.5,-200 868.5,-194 874.5,-194 874.5,-194 1046.5,-194 1046.5,-194 1052.5,-194 1058.5,-200 1058.5,-206 1058.5,-206 1058.5,-258 1058.5,-258 1058.5,-264 1052.5,-270 1046.5,-270"
					/>
					<text
						text-anchor="start"
						x="888.26"
						y="-256"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Medical Students Contaminate 1</text
					>
					<text
						text-anchor="start"
						x="890.21"
						y="-239"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Medical students, who carry out</text
					>
					<text
						text-anchor="start"
						x="882.98"
						y="-227"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examinations in the First but not in</text
					>
					<text
						text-anchor="start"
						x="876.59"
						y="-215"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						the Second Division, contaminate the</text
					>
					<text
						text-anchor="start"
						x="875.21"
						y="-203"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						women with cadavric substance. #H3
					</text>
				</g>
				<!-- n2&#45;&gt;n18 -->
				<g id="edge19" class="edge">
					<title>n2&#45;&gt;n18</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1146.53,-353.96C1110.55,-330.57 1063.95,-300.26 1026.39,-275.84"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1027.83,-272.6 1017.54,-270.09 1024.01,-278.47 1027.83,-272.6"
					/>
				</g>
				<!-- n19 -->
				<g id="node20" class="node">
					<title>n19</title>
					<path
						fill="#e7298a"
						stroke="black"
						d="M1268,-276C1268,-276 1089,-276 1089,-276 1083,-276 1077,-270 1077,-264 1077,-264 1077,-200 1077,-200 1077,-194 1083,-188 1089,-188 1089,-188 1268,-188 1268,-188 1274,-188 1280,-194 1280,-200 1280,-200 1280,-264 1280,-264 1280,-270 1274,-276 1268,-276"
					/>
					<text
						text-anchor="start"
						x="1106.76"
						y="-262"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Medical Students Contaminate 2</text
					>
					<text
						text-anchor="start"
						x="1108.71"
						y="-245"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Medical students, who carry out</text
					>
					<text
						text-anchor="start"
						x="1087.03"
						y="-233"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examinations, contaminate the women in</text
					>
					<text
						text-anchor="start"
						x="1110.39"
						y="-221"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						the First Division with cadavric</text
					>
					<text
						text-anchor="start"
						x="1102.3"
						y="-209"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						substance, yet not those who give</text
					>
					<text
						text-anchor="start"
						x="1135.1"
						y="-197"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						birth at home. #H3
					</text>
				</g>
				<!-- n2&#45;&gt;n19 -->
				<g id="edge20" class="edge">
					<title>n2&#45;&gt;n19</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1197.64,-353.96C1194.45,-333.79 1190.44,-308.48 1186.92,-286.23"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1190.36,-285.58 1185.34,-276.25 1183.45,-286.68 1190.36,-285.58"
					/>
				</g>
				<!-- n20 -->
				<g id="node21" class="node">
					<title>n20</title>
					<path
						fill="#e7298a"
						stroke="black"
						d="M1698.5,-270C1698.5,-270 1526.5,-270 1526.5,-270 1520.5,-270 1514.5,-264 1514.5,-258 1514.5,-258 1514.5,-206 1514.5,-206 1514.5,-200 1520.5,-194 1526.5,-194 1526.5,-194 1698.5,-194 1698.5,-194 1704.5,-194 1710.5,-200 1710.5,-206 1710.5,-206 1710.5,-258 1710.5,-258 1710.5,-264 1704.5,-270 1698.5,-270"
					/>
					<text
						text-anchor="start"
						x="1543.32"
						y="-256"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Washing Blocks Contamination</text
					>
					<text
						text-anchor="start"
						x="1553.88"
						y="-239"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Disinfecting, by preventing</text
					>
					<text
						text-anchor="start"
						x="1524.15"
						y="-227"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						contamination with cadavric substance,</text
					>
					<text
						text-anchor="start"
						x="1526.37"
						y="-215"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						reduces the ratio of women who suffer</text
					>
					<text
						text-anchor="start"
						x="1555.27"
						y="-203"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						from childbed fever. #H3
					</text>
				</g>
				<!-- n2&#45;&gt;n20 -->
				<g id="edge21" class="edge">
					<title>n2&#45;&gt;n20</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1301.6,-354.16C1360.76,-331.82 1437.58,-302.58 1505.5,-276 1507.35,-275.28 1509.22,-274.54 1511.11,-273.8"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1512.6,-276.98 1520.61,-270.05 1510.03,-270.46 1512.6,-276.98"
					/>
				</g>
				<!-- n21 -->
				<g id="node22" class="node">
					<title>n21</title>
					<path
						fill="#e7298a"
						stroke="black"
						d="M1484.5,-264C1484.5,-264 1310.5,-264 1310.5,-264 1304.5,-264 1298.5,-258 1298.5,-252 1298.5,-252 1298.5,-212 1298.5,-212 1298.5,-206 1304.5,-200 1310.5,-200 1310.5,-200 1484.5,-200 1484.5,-200 1490.5,-200 1496.5,-206 1496.5,-212 1496.5,-212 1496.5,-252 1496.5,-252 1496.5,-258 1490.5,-264 1484.5,-264"
					/>
					<text
						text-anchor="start"
						x="1339.43"
						y="-250"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Kolletschka Contaminated</text
					>
					<text
						text-anchor="start"
						x="1308.04"
						y="-233"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Kolletschka was slightly wounded during</text
					>
					<text
						text-anchor="start"
						x="1312.75"
						y="-221"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						an autopsy and infected with cadavric</text
					>
					<text
						text-anchor="start"
						x="1359.99"
						y="-209"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						substance. #H3
					</text>
				</g>
				<!-- n2&#45;&gt;n21 -->
				<g id="edge22" class="edge">
					<title>n2&#45;&gt;n21</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1248.98,-353.96C1279.72,-328.92 1320.19,-295.97 1351.11,-270.78"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1353.62,-273.25 1359.16,-264.22 1349.2,-267.82 1353.62,-273.25"
					/>
				</g>
				<!-- n3 -->
				<g id="node4" class="node">
					<title>n3</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M939.5,-98C939.5,-98 767.5,-98 767.5,-98 761.5,-98 755.5,-92 755.5,-86 755.5,-86 755.5,-46 755.5,-46 755.5,-40 761.5,-34 767.5,-34 767.5,-34 939.5,-34 939.5,-34 945.5,-34 951.5,-40 951.5,-46 951.5,-46 951.5,-86 951.5,-86 951.5,-92 945.5,-98 939.5,-98"
					/>
					<text
						text-anchor="start"
						x="788.49"
						y="-84"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Difference Between Divisions</text
					>
					<text
						text-anchor="start"
						x="780.43"
						y="-67"
						font-family="arial"
						font-size="10.00"
						fill="#000000">By default, more women contract</text
					>
					<text
						text-anchor="start"
						x="779.87"
						y="-55"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						childbed fever in the First than in</text
					>
					<text
						text-anchor="start"
						x="774.03"
						y="-43"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						the Second Division of the hospital.</text
					>
				</g>
				<!-- n4 -->
				<g id="node5" class="node">
					<title>n4</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M1589.5,-110C1589.5,-110 1417.5,-110 1417.5,-110 1411.5,-110 1405.5,-104 1405.5,-98 1405.5,-98 1405.5,-34 1405.5,-34 1405.5,-28 1411.5,-22 1417.5,-22 1417.5,-22 1589.5,-22 1589.5,-22 1595.5,-22 1601.5,-28 1601.5,-34 1601.5,-34 1601.5,-98 1601.5,-98 1601.5,-104 1595.5,-110 1589.5,-110"
					/>
					<text
						text-anchor="start"
						x="1469.89"
						y="-96"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Washing Helps</text
					>
					<text
						text-anchor="start"
						x="1415.42"
						y="-79"
						font-family="arial"
						font-size="10.00"
						fill="#000000">If the students who examine the women</text
					>
					<text
						text-anchor="start"
						x="1429.05"
						y="-67"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						in the First Division disinfect their</text
					>
					<text
						text-anchor="start"
						x="1418.75"
						y="-55"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						hands, the ratio of women contracting</text
					>
					<text
						text-anchor="start"
						x="1427.65"
						y="-43"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						childbed fever is the same in both</text
					>
					<text
						text-anchor="start"
						x="1481.55"
						y="-31"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						divisions.</text
					>
				</g>
				<!-- n5 -->
				<g id="node6" class="node">
					<title>n5</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M1375.5,-98C1375.5,-98 1195.5,-98 1195.5,-98 1189.5,-98 1183.5,-92 1183.5,-86 1183.5,-86 1183.5,-46 1183.5,-46 1183.5,-40 1189.5,-34 1195.5,-34 1195.5,-34 1375.5,-34 1375.5,-34 1381.5,-34 1387.5,-40 1387.5,-46 1387.5,-46 1387.5,-86 1387.5,-86 1387.5,-92 1381.5,-98 1375.5,-98"
					/>
					<text
						text-anchor="start"
						x="1239.65"
						y="-84"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Death of Kolletschka</text
					>
					<text
						text-anchor="start"
						x="1193.26"
						y="-67"
						font-family="arial"
						font-size="10.00"
						fill="#000000">A colleague of Semmelweis suffered from</text
					>
					<text
						text-anchor="start"
						x="1197.71"
						y="-55"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						symptoms similar to childbed fever and</text
					>
					<text
						text-anchor="start"
						x="1249.38"
						y="-43"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						eventually died.</text
					>
				</g>
				<!-- n6 -->
				<g id="node7" class="node">
					<title>n6</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M1153.5,-104C1153.5,-104 981.5,-104 981.5,-104 975.5,-104 969.5,-98 969.5,-92 969.5,-92 969.5,-40 969.5,-40 969.5,-34 975.5,-28 981.5,-28 981.5,-28 1153.5,-28 1153.5,-28 1159.5,-28 1165.5,-34 1165.5,-40 1165.5,-40 1165.5,-92 1165.5,-92 1165.5,-98 1159.5,-104 1153.5,-104"
					/>
					<text
						text-anchor="start"
						x="1036.94"
						y="-90"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Birth at Home</text
					>
					<text
						text-anchor="start"
						x="983.32"
						y="-73"
						font-family="arial"
						font-size="10.00"
						fill="#000000">The mortality of women who give birth</text
					>
					<text
						text-anchor="start"
						x="999.98"
						y="-61"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						at home or on their way to the</text
					>
					<text
						text-anchor="start"
						x="992.21"
						y="-49"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						hospital is significantly lower than</text
					>
					<text
						text-anchor="start"
						x="1022.5"
						y="-37"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						in the First Division.</text
					>
				</g>
				<!-- n7 -->
				<g id="node8" class="node">
					<title>n7</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M725.5,-116C725.5,-116 553.5,-116 553.5,-116 547.5,-116 541.5,-110 541.5,-104 541.5,-104 541.5,-28 541.5,-28 541.5,-22 547.5,-16 553.5,-16 553.5,-16 725.5,-16 725.5,-16 731.5,-16 737.5,-22 737.5,-28 737.5,-28 737.5,-104 737.5,-104 737.5,-110 731.5,-116 725.5,-116"
					/>
					<text
						text-anchor="start"
						x="609.5"
						y="-102"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">No Variations</text
					>
					<text
						text-anchor="start"
						x="577.54"
						y="-85"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Cases of childbed fever and</text
					>
					<text
						text-anchor="start"
						x="558.37"
						y="-73"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						corresponding mortality rates do not</text
					>
					<text
						text-anchor="start"
						x="563.94"
						y="-61"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						display spatio&#45;temporal variations</text
					>
					<text
						text-anchor="start"
						x="566.71"
						y="-49"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						(e.g. seasonal, or from district to</text
					>
					<text
						text-anchor="start"
						x="565.61"
						y="-37"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						district) that are characteristic for</text
					>
					<text
						text-anchor="start"
						x="595.6"
						y="-25"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						epidemic diseases.</text
					>
				</g>
				<!-- n8 -->
				<g id="node9" class="node">
					<title>n8</title>
					<path
						fill="white"
						stroke="#d95f02"
						stroke-width="2"
						d="M300,-436C300,-436 125,-436 125,-436 119,-436 113,-430 113,-424 113,-424 113,-360 113,-360 113,-354 119,-348 125,-348 125,-348 300,-348 300,-348 306,-348 312,-354 312,-360 312,-360 312,-424 312,-424 312,-430 306,-436 300,-436"
					/>
					<text
						text-anchor="start"
						x="162.43"
						y="-422"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Difference in Exposure</text
					>
					<text
						text-anchor="start"
						x="123.27"
						y="-405"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Women in the First Division are exposed</text
					>
					<text
						text-anchor="start"
						x="124.09"
						y="-393"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						to epidemic diseases more heavily than</text
					>
					<text
						text-anchor="start"
						x="128.25"
						y="-381"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						those who give birth at home, on their</text
					>
					<text
						text-anchor="start"
						x="131.03"
						y="-369"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						way to the hospital, or in the Second</text
					>
					<text
						text-anchor="start"
						x="168.55"
						y="-357"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						Division. #H1 #aux
					</text>
				</g>
				<!-- n8&#45;&gt;n12 -->
				<g id="edge23" class="edge">
					<title>n8&#45;&gt;n12</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M181.62,-347.83C164.74,-324.23 144,-295.22 127.58,-272.26"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="130.41,-270.2 121.74,-264.1 124.71,-274.27 130.41,-270.2"
					/>
				</g>
				<!-- n8&#45;&gt;n13 -->
				<g id="edge24" class="edge">
					<title>n8&#45;&gt;n13</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M240.92,-347.83C255.04,-326.37 272.11,-300.44 286.45,-278.66"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="289.43,-280.5 292,-270.22 283.58,-276.65 289.43,-280.5"
					/>
				</g>
				<!-- n9 -->
				<g id="node10" class="node">
					<title>n9</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M1066,-424C1066,-424 885,-424 885,-424 879,-424 873,-418 873,-412 873,-412 873,-372 873,-372 873,-366 879,-360 885,-360 885,-360 1066,-360 1066,-360 1072,-360 1078,-366 1078,-372 1078,-372 1078,-412 1078,-412 1078,-418 1072,-424 1066,-424"
					/>
					<text
						text-anchor="start"
						x="909.33"
						y="-410"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Medical Students vs Midwives</text
					>
					<text
						text-anchor="start"
						x="906.55"
						y="-393"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Women in the First Division are</text
					>
					<text
						text-anchor="start"
						x="883.2"
						y="-381"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examined by medical students, women in</text
					>
					<text
						text-anchor="start"
						x="900.43"
						y="-369"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						the Second Division by midwives.</text
					>
				</g>
				<!-- n9&#45;&gt;n15 -->
				<g id="edge25" class="edge">
					<title>n9&#45;&gt;n15</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M930.53,-359.97C898.32,-337.75 854.29,-307.37 817.38,-281.9"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="819.35,-279.01 809.13,-276.21 815.37,-284.77 819.35,-279.01"
					/>
				</g>
				<!-- n9&#45;&gt;n18 -->
				<g id="edge26" class="edge">
					<title>n9&#45;&gt;n18</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M972.54,-359.78C970.39,-337.18 967.45,-306.21 965.01,-280.54"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="968.47,-279.89 964.04,-270.27 961.5,-280.55 968.47,-279.89"
					/>
				</g>
				<!-- n10 -->
				<g id="node11" class="node">
					<title>n10</title>
					<path
						fill="white"
						stroke="#7570b3"
						stroke-width="2"
						d="M590.5,-424C590.5,-424 418.5,-424 418.5,-424 412.5,-424 406.5,-418 406.5,-412 406.5,-412 406.5,-372 406.5,-372 406.5,-366 412.5,-360 418.5,-360 418.5,-360 590.5,-360 590.5,-360 596.5,-360 602.5,-366 602.5,-372 602.5,-372 602.5,-412 602.5,-412 602.5,-418 596.5,-424 590.5,-424"
					/>
					<text
						text-anchor="start"
						x="475.61"
						y="-410"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">More Injuries</text
					>
					<text
						text-anchor="start"
						x="428.93"
						y="-393"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Due to their inexperience, medical</text
					>
					<text
						text-anchor="start"
						x="424.21"
						y="-381"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						students cause more injuries during</text
					>
					<text
						text-anchor="start"
						x="429.76"
						y="-369"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examination than midwives. #H2
					</text>
				</g>
				<!-- n10&#45;&gt;n15 -->
				<g id="edge27" class="edge">
					<title>n10&#45;&gt;n15</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M552.02,-359.97C586.06,-337.75 632.59,-307.37 671.6,-281.9"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="673.85,-284.61 680.31,-276.21 670.03,-278.75 673.85,-284.61"
					/>
				</g>
				<!-- n11 -->
				<g id="node12" class="node">
					<title>n11</title>
					<path
						fill="white"
						stroke="#1b9e77"
						stroke-width="2"
						d="M804.5,-418C804.5,-418 632.5,-418 632.5,-418 626.5,-418 620.5,-412 620.5,-406 620.5,-406 620.5,-378 620.5,-378 620.5,-372 626.5,-366 632.5,-366 632.5,-366 804.5,-366 804.5,-366 810.5,-366 816.5,-372 816.5,-378 816.5,-378 816.5,-406 816.5,-406 816.5,-412 810.5,-418 804.5,-418"
					/>
					<text
						text-anchor="start"
						x="645.71"
						y="-404"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Examination Injuries Insignificant</text
					>
					<text
						text-anchor="start"
						x="644.6"
						y="-387"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Difference in examination doesn&#39;t</text
					>
					<text
						text-anchor="start"
						x="642.65"
						y="-375"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						entail difference in childbed fever.</text
					>
				</g>
				<!-- n11&#45;&gt;n15 -->
				<g id="edge5" class="edge">
					<title>n11&#45;&gt;n15</title>
					<path
						fill="none"
						stroke="#ff0000"
						d="M722.94,-365.96C726.72,-344.59 732.3,-313.12 737.08,-286.17"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="740.57,-286.54 738.86,-276.09 733.67,-285.32 740.57,-286.54"
					/>
				</g>
				<!-- n12&#45;&gt;n3 -->
				<g id="edge7" class="edge">
					<title>n12&#45;&gt;n3</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M168.52,-199.97C181.27,-195.26 194.62,-190.99 207.5,-188 441.55,-133.7 521.44,-230.53 746.5,-146.4 771.15,-137.19 795.02,-120.49 813.93,-104.77"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="816.39,-107.27 821.73,-98.12 811.85,-101.95 816.39,-107.27"
					/>
				</g>
				<!-- n13&#45;&gt;n6 -->
				<g id="edge8" class="edge">
					<title>n13&#45;&gt;n6</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M403.83,-193.96C411.08,-191.68 418.36,-189.65 425.5,-188 657.89,-134.4 737.13,-229.97 960.5,-146.4 982.11,-138.32 1003.12,-124.48 1020.72,-110.6"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1022.99,-113.26 1028.55,-104.24 1018.58,-107.83 1022.99,-113.26"
					/>
				</g>
				<!-- n14&#45;&gt;n7 -->
				<g id="edge4" class="edge">
					<title>n14&#45;&gt;n7</title>
					<path
						fill="none"
						stroke="#ff0000"
						d="M552.88,-199.77C566.71,-178.56 585.43,-149.88 601.92,-124.61"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="604.88,-126.47 607.41,-116.18 599.02,-122.64 604.88,-126.47"
					/>
				</g>
				<!-- n15&#45;&gt;n3 -->
				<g id="edge9" class="edge">
					<title>n15&#45;&gt;n3</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M774.61,-187.91C791.06,-162.7 811.68,-131.09 827.71,-106.52"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="830.65,-108.43 833.18,-98.15 824.78,-104.61 830.65,-108.43"
					/>
				</g>
				<!-- n16 -->
				<g id="node17" class="node">
					<title>n16</title>
					<path
						fill="#1b9e77"
						stroke="black"
						d="M596,-584C596,-584 419,-584 419,-584 413,-584 407,-578 407,-572 407,-572 407,-520 407,-520 407,-514 413,-508 419,-508 419,-508 596,-508 596,-508 602,-508 608,-514 608,-520 608,-520 608,-572 608,-572 608,-578 602,-584 596,-584"
					/>
					<text
						text-anchor="start"
						x="452.72"
						y="-570"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Medical Students Skillfull</text
					>
					<text
						text-anchor="start"
						x="428.55"
						y="-553"
						font-family="arial"
						font-size="10.00"
						fill="#000000">Medical students are no less skillfull</text
					>
					<text
						text-anchor="start"
						x="436.04"
						y="-541"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						than midwives and carry out the</text
					>
					<text
						text-anchor="start"
						x="417.43"
						y="-529"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						examinations in approximately the same</text
					>
					<text
						text-anchor="start"
						x="496.33"
						y="-517"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						way.</text
					>
				</g>
				<!-- n16&#45;&gt;n10 -->
				<g id="edge6" class="edge">
					<title>n16&#45;&gt;n10</title>
					<path
						fill="none"
						stroke="#ff0000"
						d="M506.77,-507.82C506.33,-485.56 505.77,-457.24 505.31,-434.29"
					/>
					<polygon
						fill="#ff0000"
						stroke="#ff0000"
						points="508.81,-434.09 505.12,-424.16 501.81,-434.23 508.81,-434.09"
					/>
				</g>
				<!-- n17 -->
				<g id="node18" class="node">
					<title>n17</title>
					<path
						fill="#1b9e77"
						stroke="black"
						d="M810.5,-578C810.5,-578 638.5,-578 638.5,-578 632.5,-578 626.5,-572 626.5,-566 626.5,-566 626.5,-526 626.5,-526 626.5,-520 632.5,-514 638.5,-514 638.5,-514 810.5,-514 810.5,-514 816.5,-514 822.5,-520 822.5,-526 822.5,-526 822.5,-566 822.5,-566 822.5,-572 816.5,-578 810.5,-578"
					/>
					<text
						text-anchor="start"
						x="669.21"
						y="-564"
						font-family="arial"
						font-weight="bold"
						font-size="10.00"
						fill="#000000">Main Injuries due to Birth</text
					>
					<text
						text-anchor="start"
						x="636.71"
						y="-547"
						font-family="arial"
						font-size="10.00"
						fill="#000000">The main injuries that women suffer are</text
					>
					<text
						text-anchor="start"
						x="648.36"
						y="-535"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						due to giving birth itself and not to</text
					>
					<text
						text-anchor="start"
						x="645.32"
						y="-523"
						font-family="arial"
						font-size="10.00"
						fill="#000000"
					>
						previous or posterior examinations.</text
					>
				</g>
				<!-- n17&#45;&gt;n11 -->
				<g id="edge10" class="edge">
					<title>n17&#45;&gt;n11</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M723.27,-513.87C722.29,-488.99 720.91,-454.1 719.89,-428.2"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="723.38,-427.91 719.49,-418.06 716.39,-428.19 723.38,-427.91"
					/>
				</g>
				<!-- n18&#45;&gt;n3 -->
				<g id="edge11" class="edge">
					<title>n18&#45;&gt;n3</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M936.22,-193.79C919.27,-167.8 896.67,-133.17 879.38,-106.67"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="882.13,-104.48 873.73,-98.01 876.27,-108.3 882.13,-104.48"
					/>
				</g>
				<!-- n19&#45;&gt;n6 -->
				<g id="edge12" class="edge">
					<title>n19&#45;&gt;n6</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1149.34,-187.91C1133.66,-164.75 1114.34,-136.2 1098.4,-112.66"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1101.2,-110.55 1092.7,-104.23 1095.41,-114.48 1101.2,-110.55"
					/>
				</g>
				<!-- n20&#45;&gt;n4 -->
				<g id="edge13" class="edge">
					<title>n20&#45;&gt;n4</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1587.77,-193.79C1572.99,-171.55 1554,-142.98 1537.79,-118.59"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1540.63,-116.55 1532.18,-110.16 1534.8,-120.42 1540.63,-116.55"
					/>
				</g>
				<!-- n21&#45;&gt;n5 -->
				<g id="edge14" class="edge">
					<title>n21&#45;&gt;n5</title>
					<path
						fill="none"
						stroke="#00ff00"
						d="M1376.17,-199.77C1358.11,-173.32 1332.12,-135.26 1312.59,-106.66"
					/>
					<polygon
						fill="#00ff00"
						stroke="#00ff00"
						points="1315.28,-104.4 1306.75,-98.12 1309.5,-108.35 1315.28,-104.4"
					/>
				</g>
			</g>
		</svg>
	</div></argdown-map
>
