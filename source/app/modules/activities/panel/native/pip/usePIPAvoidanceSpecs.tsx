// app/modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = {};
    oscar = 'function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,imeInsetsBottom:safeArea.imeInsetsBottom,screenName:screenName.get()};}';
    entity['code'] = oscar;
    var _closure1_slot3 = entity;
    entity = {};
    oscar = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,imeInsetsBottom:imeInsetsBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{adjustedScreenBottomOffset:adjustedScreenBottomOffset,bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,imeInsetsBottom:imeInsetsBottom,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:Math.max(bottomOffset,adjustedScreenBottomOffset)});}';
    entity['code'] = oscar;
    var _closure1_slot4 = entity;
    entity = 7;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: usePIPAvoidanceSpecs
        foxtrot = argFoo;
        var _closure2_slot0 = foxtrot;
        romeo = _closure1_slot0;
        yankee = _closure1_slot2;
        zulu = 0;
        entity = yankee[zulu];
        offset = undefined;
        report = romeo.bind(offset)(entity);
        tango = report.useSharedValue;
        entity = {'top': 0, 'bottom': 0};
        entity = tango.bind(report)(entity);
        var _closure2_slot1 = entity;
        verify = _closure1_slot1;
        tango = 1;
        tango = yankee[tango];
        tango = verify.bind(offset)(tango);
        backup = tango.bind(offset)();
        var _closure2_slot2 = backup;
        tango = 2;
        tango = yankee[tango];
        tango = verify.bind(offset)(tango);
        options = tango.bind(offset)();
        var _closure2_slot3 = options;
        zulu = yankee[zulu];
        report = romeo.bind(offset)(zulu);
        tango = report.useAnimatedReaction;
        zulu = function() { // Original name: f
            entity = {};
            tango = _closure2_slot2;
            zulu = tango.get;
            zulu = zulu.bind(tango)();
            entity['keyboardHeight'] = zulu;
            zulu = _closure2_slot0;
            tango = zulu.bottom;
            entity['safeAreaBottom'] = tango;
            zulu = zulu.imeInsetsBottom;
            entity['imeInsetsBottom'] = zulu;
            zulu = _closure2_slot3;
            mike = zulu.get;
            mike = mike.bind(zulu)();
            entity['screenName'] = mike;
            return entity;
        };
        golf = {};
        golf['keyboardHeight'] = backup;
        golf['safeArea'] = foxtrot;
        golf['screenName'] = options;
        zulu['__closure'] = golf;
        golf = 3347413314738.0;
        zulu['__workletHash'] = golf;
        golf = _closure1_slot3;
        zulu['__initData'] = golf;
        mike = function(argFoo, argBar) { // Original name: n
            _fun121287: for(var _fun121287_ip = 0; ; ) switch(_fun121287_ip) {
 0:
                zulu = argFoo;
                golf = argBar;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 3;
                tango = tango[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.cheapWorkletShallowEqual;
                tango = null;
                options = tango != golf;
                tango = undefined;
                if(!options) { _fun121287_ip = 51; continue _fun121287 }
 48:
                tango = golf;
 51:
                tango = report.bind(oscar)(zulu, tango);
                if(tango) { _fun121287_ip = 219; continue _fun121287 }
 63:
                oscar = zulu.keyboardHeight;
                golf = zulu.safeAreaBottom;
                options = zulu.imeInsetsBottom;
                report = zulu.screenName;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 4;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                verify = mike.bind(entity)(report);
                mike = 5;
                mike = tango[mike];
                report = zulu.bind(entity)(mike);
                mike = {};
                mike['screenBottomOffset'] = verify;
                mike['imeInsetsBottom'] = options;
                mike['safeAreaBottom'] = golf;
                mike['keyboardHeight'] = oscar;
                mike = report.bind(entity)(mike);
                options = mike.adjustedScreenBottomOffset;
                golf = mike.bottomOffset;
                mike = 6;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = _closure2_slot1;
                mike = {};
                report = 0;
                mike['top'] = report;
                report = global;
                oscar = report.Math;
                report = oscar.max;
                report = report.bind(oscar)(golf, options);
                mike['bottom'] = report;
                mike = tango.bind(entity)(zulu, mike);
 219:
                return entity;
            }
        };
        golf = {};
        options = 3;
        options = yankee[options];
        options = romeo.bind(offset)(options);
        options = options.cheapWorkletShallowEqual;
        golf['cheapWorkletShallowEqual'] = options;
        options = 4;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['getPIPBottomOffsetForPIPMode'] = options;
        options = 5;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['getAdjustedBottomOffsets'] = options;
        options = 6;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['updateSharedValueIfChanged'] = options;
        golf['pipAvoidanceSpecs'] = entity;
        mike['__closure'] = golf;
        golf = 15497444455440.0;
        mike['__workletHash'] = golf;
        oscar = _closure1_slot4;
        mike['__initData'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();