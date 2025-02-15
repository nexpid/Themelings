// app/modules/panels/morphable/native/getAdjustedBottomOffsets.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    entity = {};
    mike = 'function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,imeInsetsBottom:imeInsetsBottom,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){let adjustedScreenBottomOffset=screenBottomOffset;if(imeInsetsBottom>0){adjustedScreenBottomOffset-=safeAreaBottom;}let bottomOffset=adjustedScreenBottomOffset;if(keyboardHeight>0){bottomOffset+=keyboardHeight-safeAreaBottom;}return{adjustedScreenBottomOffset:adjustedScreenBottomOffset,bottomOffset:bottomOffset};}';
    entity['code'] = mike;
    mike = function(argFoo) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.screenBottomOffset;
            oscar = entity.imeInsetsBottom;
            tango = entity.safeAreaBottom;
            entity = entity.keyboardHeight;
            report = 0;
            zulu = mike;
            if(!(oscar > report)) { _fun00002_ip = 40; continue _fun00001 }
 36:
            zulu = mike - tango;
 40:
            mike = zulu;
            if(!(entity > report)) { _fun00002_ip = 55; continue _fun00001 }
 47:
            entity = entity - tango;
            mike = zulu + entity;
 55:
            entity = {};
            entity['adjustedScreenBottomOffset'] = zulu;
            entity['bottomOffset'] = mike;
            return entity;
        }
    };
    tango = {};
    mike['__closure'] = tango;
    tango = 2828202894541.0;
    mike['__workletHash'] = tango;
    mike['__initData'] = entity;
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/panels/morphable/native/getAdjustedBottomOffsets.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();