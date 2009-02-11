<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
  <HEAD>
    <style type="text/css"> </style>
    <TITLE> Userprefs Params Example </TITLE>
    <?php
      // Parse gadget URL and emit <script src=...</script> statements into the HTML output. 
      // The <script src=...</script> statements will load the libraries passed in via the URL.
      $libraries = split(",", $_GET["libs"]);
      foreach ($libraries as $script) {
        if (preg_match('@^[a-z0-9/._-]+$@i', $script)
          && !preg_match('@([.][.])|([.]/)|(//)@', $script)) {
            print "<script src='http://www.google.com/ig/f/$script'></script>";
        }
      } 
    ?>
  </HEAD>
   <BODY>
    <div id="content_div" style="font-size:12pt; padding:5px;"></div>

    <script type="text/javascript">
    _gel("content_div").innerHTML = "Todo va bien";
    </script>

   </BODY>
</HTML>