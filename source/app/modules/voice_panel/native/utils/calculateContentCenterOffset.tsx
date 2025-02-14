// app/modules/voice_panel/native/utils/calculateContentCenterOffset.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    options = tango.EDGE_GUTTER;
    var _closure1_slot2 = options;
    tango = {};
    golf = 'function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){const{EDGE_GUTTER,roundToNearestPixel}=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));}';
    tango['code'] = golf;
    mike = function(argFoo) { // Original name: t
        _fun122078: for(var _fun122078_ip = 0; ; ) switch(_fun122078_ip) {
 0:
            entity = argFoo;
            options = entity.contentHeight;
            mike = entity.windowHeight;
            entity = entity.safeArea;
            zulu = global;
            golf = zulu.Math;
            report = golf.max;
            tango = entity.top;
            verify = _closure1_slot2;
            report = report.bind(golf)(tango, verify);
            golf = zulu.Math;
            tango = golf.max;
            entity = entity.bottom;
            verify = tango.bind(golf)(entity, verify);
            entity = report;
            if(!(!(mike <= options))) { _fun122078_ip = 148; continue _fun122078 }
 81:
            tango = zulu.Math;
            zulu = tango.max;
            offset = _closure1_slot0;
            golf = _closure1_slot1;
            oscar = 1;
            oscar = golf[oscar];
            golf = undefined;
            oscar = offset.bind(golf)(oscar);
            mike = mike - report;
            mike = mike - verify;
            options = mike - options;
            mike = 2;
            mike = options / mike;
            mike = oscar.bind(golf)(mike);
            mike = report + mike;
            entity = zulu.bind(tango)(report, mike);
 148:
            return entity;
        }
    };
    golf = {};
    golf['EDGE_GUTTER'] = options;
    options = 1;
    options = oscar[options];
    options = verify.bind(entity)(options);
    golf['roundToNearestPixel'] = options;
    mike['__closure'] = golf;
    golf = 9988657249690.0;
    mike['__workletHash'] = golf;
    mike['__initData'] = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/utils/calculateContentCenterOffset.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();