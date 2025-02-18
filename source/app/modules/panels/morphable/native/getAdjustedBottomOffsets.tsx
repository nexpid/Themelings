// app/modules/panels/morphable/native/getAdjustedBottomOffsets.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    entity = {};
    michal = 'function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,imeInsetsBottom:imeInsetsBottom,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){let adjustedScreenBottomOffset=screenBottomOffset;if(imeInsetsBottom>0){adjustedScreenBottomOffset-=safeAreaBottom;}let bottomOffset=adjustedScreenBottomOffset;if(keyboardHeight>0){bottomOffset+=keyboardHeight-safeAreaBottom;}return{adjustedScreenBottomOffset:adjustedScreenBottomOffset,bottomOffset:bottomOffset};}';
    entity['code'] = michal;
    michal = function(argFoo) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.screenBottomOffset;
            oscard = entity.imeInsetsBottom;
            tangon = entity.safeAreaBottom;
            entity = entity.keyboardHeight;
            report = 0;
            zuuluu = michal;
            if(!(oscard > report)) { _fun00002_ip = 40; continue _fun00001 }
 36:
            zuuluu = michal - tangon;
 40:
            michal = zuuluu;
            if(!(entity > report)) { _fun00002_ip = 55; continue _fun00001 }
 47:
            entity = entity - tangon;
            michal = zuuluu + entity;
 55:
            entity = {};
            entity['adjustedScreenBottomOffset'] = zuuluu;
            entity['bottomOffset'] = michal;
            return entity;
        }
    };
    tangon = {};
    michal['__closure'] = tangon;
    tangon = 2828202894541.0;
    michal['__workletHash'] = tangon;
    michal['__initData'] = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/panels/morphable/native/getAdjustedBottomOffsets.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();