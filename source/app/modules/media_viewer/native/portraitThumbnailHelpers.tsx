// app/modules/media_viewer/native/portraitThumbnailHelpers.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    michal = global;
    oscard = michal.Object;
    report = oscard.defineProperty;
    tangon = {};
    michal = true;
    tangon['value'] = michal;
    michal = '__esModule';
    michal = report.bind(oscard)(zuuluu, michal, tangon);
    michal = {};
    tangon = 'function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}';
    michal['code'] = tangon;
    var _closure1_slot0 = michal;
    michal = function() {
        entity = function(argFoo, argBar) { // Original name: lerpVarWidthThumbnailScrollBounds
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                michal = argBar;
                tangon = zuuluu.length;
                entity = 0;
                if(!(entity !== tangon)) { _fun00002_ip = 156; continue _fun00001 }
 20:
                if(!(!(michal < entity))) { _fun00002_ip = 154; continue _fun00001 }
 27:
                tangon = zuuluu.length;
                if(!(michal >= tangon)) { _fun00002_ip = 41; continue _fun00001 }
 36:
                michal = zuuluu.length;
 41:
                tangon = global;
                report = tangon.Math;
                tangon = report.floor;
                golfie = tangon.bind(report)(michal);
                report = michal - golfie;
                michal = zuuluu.length;
                if(!(!(golfie >= michal))) { _fun00002_ip = 130; continue _fun00001 }
 73:
                michal = zuuluu[golfie];
                tangon = michal.scrollStart;
                michal = zuuluu.length;
                oscard = 1;
                option = michal - oscard;
                michal = tangon;
                if(!(golfie < option)) { _fun00002_ip = 116; continue _fun00001 }
 102:
                oscard = golfie + oscard;
                oscard = zuuluu[oscard];
                michal = oscard.scrollStart;
 116:
                michal = michal - tangon;
                michal = report * michal;
                michal = tangon + michal;
                return michal;
 130:
                tangon = zuuluu.length;
                michal = 1;
                michal = tangon - michal;
                michal = zuuluu[michal];
                michal = michal.scrollStart;
                return michal;
 154:
                return entity;
 156:
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 5256874583737.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot0;
        entity['__initData'] = michal;
        return entity;
    };
    entity = undefined;
    michal = michal.bind(entity)();
    report = argPlu;
    tangon = 0;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_viewer/native/portraitThumbnailHelpers.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['lerpVarWidthThumbnailScrollBounds'] = michal;
    return entity;
})();