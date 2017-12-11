/**
 * @author Kevin Duglue <kevin.duglue@gmail.com>
 * @author Rémy Kaloustian <remy.kaloustian@gmail.com>
 */


// Import JQuery
import $ from 'jquery/dist/jquery.min';

import ElementWidget from '../ElementWidget';
  /**
   * Main class to manage ImageElementWidget.
   *
   * @class ImageElementWidget
   * @extends ElementWidget
   */
class VideoElementWidget extends ElementWidget {
  /**
   * ImageElementWidget constructor.
   *
   * @constructor
   * @param {number} x - ImageElementWidget's upperleft coin abscissa.
   * @param {number} y - ImageElementWidget's upperleft coin ordinate.
   * @param {number} width - ImageElementWidget's width.
   * @param {number} height - ImageElementWidget's height.
   */
  constructor(x, y, width, height, initialRotation, initialScale, src, tagMove, tagDelete, tagZoom, tagDuplicate, tagPlayPause) {
    super(x, y, width, height, initialRotation, initialScale, tagMove, tagDelete, tagZoom, tagDuplicate);
    this._domElem = $('<div>');
    this._domElem.append(
      $('<video>').attr('src', src)
                  .css('width', '100%')
                  .css('position', 'absolute'),
      $('<div>').css('width', '100%')
                .css('height', '64px')
                .css('id', 'playbutton')
                .css('position', 'absolute')
                .css('top', '0')
                .css('bottom', '0')
                .css('right', '0')
                .css('left', '0')
                .css('margin', 'auto')
                .css('background', 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5Ni4xNTggNDk2LjE1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2LjE1OCA0OTYuMTU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzJCRUE2OyIgZD0iTTQ5Ni4xNTgsMjQ4LjA4NWMwLTEzNy4wMjEtMTExLjA3LTI0OC4wODItMjQ4LjA3Ni0yNDguMDgyQzExMS4wNywwLjAwMiwwLDExMS4wNjIsMCwyNDguMDg1DQoJYzAsMTM3LjAwMiwxMTEuMDcsMjQ4LjA3MSwyNDguMDgzLDI0OC4wNzFDMzg1LjA4OCw0OTYuMTU1LDQ5Ni4xNTgsMzg1LjA4Niw0OTYuMTU4LDI0OC4wODV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM3MC44MDUsMjM1LjI0MkwxOTUuODU2LDEyNy44MThjLTQuNzc2LTIuOTM0LTExLjA2MS0zLjA2MS0xNS45NTEtMC4zMjINCgljLTQuOTc5LDIuNzg1LTguMDcxLDguMDU5LTguMDcxLDEzLjc2MnYyMTRjMCw1LjY5MywzLjA4MywxMC45NjMsOC4wNDYsMTMuNzUyYzIuMzUzLDEuMzIsNS4wMjQsMi4wMiw3LjcyNSwyLjAyDQoJYzIuODk3LDAsNS43MzQtMC43OTcsOC4yMDUtMi4zMDNsMTc0Ljk0Ny0xMDYuNTc2YzQuNjU3LTIuODM2LDcuNTU2LTcuOTg2LDcuNTY1LTEzLjQ0DQoJQzM3OC4zMzIsMjQzLjI1OCwzNzUuNDUyLDIzOC4wOTYsMzcwLjgwNSwyMzUuMjQyeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=") center center no-repeat'));
    this._domElem.css('width', `${this.width}px`);
    this._domElem.css('height', `${this.height}px`);
    this._domElem.css('position', 'absolute');
    this._domElem.css('left', `${x}px`);
    this._domElem.css('top', `${y}px`);
    this._domElem.css('z-index', `${this.zIndex}`);
    this._domElem.css('transform', `rotate(${initialRotation}deg)`);
    this._domElem.css('transform-origin', `scale(${initialScale})`);
    this.idTagPlayPause = tagPlayPause;
    this.isPlaying = false;
    this.canPlayPauseTangible = true;
    this.canPlayPauseTactile = true;
    this.canPlayPause = true;
  } // constructor


  /**
   * Call after a TUIOTag creation.
   *
   * @method onTagCreation
   * @param {TUIOTag} tuioTag - A TUIOTag instance.
   */
  onTouchCreation(tuioTouch) {
    super.onTouchCreation(tuioTouch);
    this.timeInitTouchVideo = Date.now();
    this.touchInitX = tuioTouch.x;
    this.touchInitY = tuioTouch.y;
  }

  /**
   * Call after a TUIOTouch update.
   *
   * @method onTouchUpdate
   * @param {TUIOTouch} tuioTouch - A TUIOTouch instance.
   */
  onTouchUpdate(tuioTouch) {
    super.onTouchUpdate(tuioTouch);
    if (typeof (this._lastTouchesValues[tuioTouch.id]) !== 'undefined') {
      const touchesWidgets = [];
      const currentTouches = this.touches;
      Object.keys(this.touches).forEach((key) => {
        touchesWidgets.push(currentTouches[key]);
      });
      const timeUpdateTouch = Date.now();
      const deltaX = Math.abs(tuioTouch.x - this.touchInitX);
      const deltaY = Math.abs(tuioTouch.y - this.touchInitY);
      const deltaT = (timeUpdateTouch - this.timeInitTouchVideo) / 1000;
      if (touchesWidgets.length === 1 && this.canPlayPause && deltaT > 0.5 && deltaX < 10 && deltaY < 10) {
        this.canPlayPause = false;
        this.playPauseVideo();
        super.onTouchDeletion(tuioTouch.id);
        this.canRemove = false;
      }
    }
  }

  /**
   * Call after a TUIOTouch update.
   *
   * @method onTouchUpdate
   * @param {TUIOTouch} tuioTouch - A TUIOTouch instance.
   */
  onTouchDeletion(tuioTouchId) {
    super.onTouchDeletion(tuioTouchId);
    this.canPlayPause = true;
  }

  /**
   * Call after a TUIOTag creation.
   *
   * @method onTagCreation
   * @param {TUIOTag} tuioTag - A TUIOTag instance.
   */
  onTagCreation(tuioTag) {
    super.onTagCreation(tuioTag);
    if (this.isTouched(tuioTag.x, tuioTag.y)) {
      if (tuioTag.id === this.idTagPlayPause && this.canPlayPauseTangible) {
        this.playPauseVideo();
      } else if (tuioTag.id === this.tagDuplicate) {
        const clone = new VideoElementWidget(200, 200, this.width, this.height, this._currentAngle, 1, this.src, this.tagMove, this.tagDelete, this.tagZoom, this.tagDuplicate, this.idTagPlayPause);
        TUIOManager.getInstance().addWidget(clone);
        this._domElem.parent().append(clone.domElem);
      }
    }
  }

  playPauseVideo() {
    this._domElem.children().first().on('ended', () => {
      this._domElem.children().eq(1).show();
    });
    if (this.isPlaying) {
      this._domElem.children().first()[0].pause();
      this._domElem.children().eq(1).show();
      this.isPlaying = false;
    } else {
      this._domElem.children().first()[0].play();
      this._domElem.children().eq(1).hide();
      this.isPlaying = true;
    }
  }

  /**
   * Call to enable/disable play/pause
   *
   * @method rotate
   * @param {boolean} canZoomTangible - Enable/disable tangible zoom
   * @param {boolean} canZoomTactile - Enable/disable tactile zoom
  */
  canPlayPause(canPlayPauseTangible, canPlayPauseTactile) {
    this.canPlayPauseTangible = canPlayPauseTangible;
    this.canPlayPauseTactile = canPlayPauseTactile;
  }
} // class ImageElementWidget

export default VideoElementWidget;
