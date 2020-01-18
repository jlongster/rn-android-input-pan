
Run this with `npx react-native run-android` and observe the following behavior (ignore the bad colors):

* Scroll the view up and down and notice that the "header" doesn't move
* Tap the text input, the whole app including the header pans up

This happens because this uses `android:windowSoftInputMode="adjustPan"` in `AndroidManifest.xml`, which is much more desirable than `adjustResize` which resizes the whole app. Is there a way to control which content is moved when the keyboard opens though?

Since the TextInput is in a ScrollView, it should simply scroll to show the input above the keyboard instead of moving the whole app. How can I enable that behavior?

This doesn't involve React Native's `KeyboardAvoidingView`, but eventually I will use that to help resize the height of certain views. But first I need to control the panning of the app.


![](http://jlongster.com/s/upload/97b8527d-323d-4658-a7bf-323fdf02c258.gif)