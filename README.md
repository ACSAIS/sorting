<table>
  <tr>
    <th>Algorithm</th>
    <th>Best-case</th>
    <th>Worst-case</th>
    <th>Average-case</th>
    <th>Space Complexity</th>
    <th>Stable?</th>
  </tr>
  <tr>
    <td>Mege Sort</td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(<i>n</i>)</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Insertion Sort</td>
    <td><i>O</i>(<i>n</i>)</td>
    <td><i>O</i>(<i>n</i><sup>2</sup>)</td>
    <td><i>O</i>(<i>n</i><sup>2</sup>)</td>
    <td><i>O</i>(1)</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Bubble Sort</td>
    <td><i>O</i>(<i>n</i>)</td>
    <td><i>O</i>(<i>n</i><sup>2</sup>)</td>
    <td><i>O</i>(<i>n</i><sup>2</sup>)</td>
    <td><i>O</i>(1)</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td><a href="https://github.com/ACSAIS/sorting/tree/master/Quicksort" >Quicksort</a></td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(<i>n</i><sup>2</sup>)</td>
    <td>n log n</td>
    <td>log n best, n avg</td>
    <td>Usually not<sup>*</sup></td>
  </tr>
  <tr>
    <td>Heapsort</td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(<i>n</i> log <i>n</i>)</td>
    <td><i>O</i>(1)</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Counting Sort</td>
    <td><i>O</i>(<i>k</i> + <i>n</i>)</td>
    <td><i>O</i>(<i>k</i> + <i>n</i>)</td>
    <td><i>O</i>(<i>k</i> + <i>n</i>)</td>
    <td><i>O</i>(<i>k</i> + <i>n</i>)</td>
    <td>Yes</td>
  </tr>
</table>
<sup>*</sup>Most quicksort implementations are not stable, though stable implementations do exist.
