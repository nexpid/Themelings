// app/modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    golf = tango.VoicePanelModes;
    var _closure1_slot3 = golf;
    tango = tango.IS_IOS;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelControlsModes;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PIP_WINDOW_OFFSET;
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,IS_IOS,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:IS_IOS?keyboardHeight.get():0,safeArea:safeArea.get(),screenName:screenName.get()};}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{adjustedScreenBottomOffset:adjustedScreenBottomOffset,bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,imeInsetsBottom:safeArea.imeInsetsBottom,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:Math.max(bottomOffset,adjustedScreenBottomOffset)});}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: usePIPAvoidanceSpecs
        entity = argFoo;
        sizing = entity.mode;
        var _closure2_slot0 = sizing;
        kilo = entity.controlsSpecs;
        var _closure2_slot1 = kilo;
        foxtrot = entity.safeArea;
        var _closure2_slot2 = foxtrot;
        romeo = _closure1_slot0;
        yankee = _closure1_slot2;
        zulu = 3;
        entity = yankee[zulu];
        offset = undefined;
        report = romeo.bind(offset)(entity);
        tango = report.useSharedValue;
        entity = {'top': 0, 'bottom': 0};
        entity = tango.bind(report)(entity);
        var _closure2_slot3 = entity;
        verify = _closure1_slot1;
        tango = 4;
        tango = yankee[tango];
        tango = verify.bind(offset)(tango);
        backup = tango.bind(offset)();
        var _closure2_slot4 = backup;
        tango = 5;
        tango = yankee[tango];
        tango = verify.bind(offset)(tango);
        options = tango.bind(offset)();
        var _closure2_slot5 = options;
        zulu = yankee[zulu];
        report = romeo.bind(offset)(zulu);
        tango = report.useAnimatedReaction;
        zulu = function() { // Original name: S
            _fun121678: for(var _fun121678_ip = 0; ; ) switch(_fun121678_ip) {
 0:
                entity = {};
                tango = _closure2_slot0;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity['mode'] = zulu;
                tango = _closure2_slot1;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity['controlsSpecs'] = zulu;
                tango = _closure1_slot4;
                zulu = 0;
                if(!tango) { _fun121678_ip = 65; continue _fun121678 }
 52:
                report = _closure2_slot4;
                tango = report.get;
                zulu = tango.bind(report)();
 65:
                entity['keyboardHeight'] = zulu;
                tango = _closure2_slot2;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity['safeArea'] = zulu;
                zulu = _closure2_slot5;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity['screenName'] = mike;
                return entity;
            }
        };
        golf = {};
        golf['mode'] = sizing;
        golf['controlsSpecs'] = kilo;
        kilo = _closure1_slot4;
        golf['IS_IOS'] = kilo;
        golf['keyboardHeight'] = backup;
        golf['safeArea'] = foxtrot;
        golf['screenName'] = options;
        zulu['__closure'] = golf;
        golf = 3889227533187.0;
        zulu['__workletHash'] = golf;
        golf = _closure1_slot7;
        zulu['__initData'] = golf;
        mike = function(argFoo, argBar) { // Original name: p
            _fun121679: for(var _fun121679_ip = 0; ; ) switch(_fun121679_ip) {
 0:
                zulu = argFoo;
                oscar = argBar;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                report = tango.bind(entity)(mike);
                tango = report.cheapWorkletShallowEqual;
                mike = null;
                golf = mike != oscar;
                mike = undefined;
                if(!golf) { _fun121679_ip = 51; continue _fun121679 }
 48:
                mike = oscar;
 51:
                mike = tango.bind(report)(zulu, mike);
                if(mike) { _fun121679_ip = 446; continue _fun121679 }
 63:
                foxtrot = zulu.mode;
                offset = zulu.controlsSpecs;
                mike = zulu.keyboardHeight;
                report = zulu.safeArea;
                tango = zulu.screenName;
                zulu = _closure1_slot3;
                zulu = zulu.PIP;
                if(!(foxtrot === zulu)) { _fun121679_ip = 133; continue _fun121679 }
 106:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                zulu = 7;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                oscar = zulu.bind(entity)(tango);
                _fun121679_ip = 184; continue _fun121679;
 133:
                zulu = _closure1_slot3;
                tango = zulu.PANEL;
                zulu = 0;
                if(!(foxtrot === tango)) { _fun121679_ip = 181; continue _fun121679 }
 149:
                golf = offset.mode;
                tango = _closure1_slot5;
                tango = tango.DRAWER;
                zulu = 0;
                if(!(golf === tango)) { _fun121679_ip = 181; continue _fun121679 }
 170:
                golf = _closure1_slot6;
                tango = 60;
                zulu = tango + golf;
 181:
                oscar = zulu;
 184:
                tango = _closure1_slot1;
                golf = _closure1_slot2;
                zulu = 8;
                zulu = golf[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = {};
                zulu['screenBottomOffset'] = oscar;
                oscar = report.imeInsetsBottom;
                zulu['imeInsetsBottom'] = oscar;
                oscar = report.bottom;
                zulu['safeAreaBottom'] = oscar;
                zulu['keyboardHeight'] = mike;
                zulu = tango.bind(entity)(zulu);
                options = zulu.adjustedScreenBottomOffset;
                zulu = zulu.bottomOffset;
                yankee = 0;
                mike = mike <= yankee;
                if(!mike) { _fun121679_ip = 277; continue _fun121679 }
 263:
                tango = _closure1_slot3;
                tango = tango.PANEL;
                mike = foxtrot === tango;
 277:
                if(!mike) { _fun121679_ip = 299; continue _fun121679 }
 280:
                oscar = offset.mode;
                tango = _closure1_slot5;
                tango = tango.FLOATING_DEFAULT;
                mike = oscar === tango;
 299:
                golf = zulu;
                if(!mike) { _fun121679_ip = 322; continue _fun121679 }
 305:
                tango = offset.height;
                mike = _closure1_slot6;
                mike = tango + mike;
                golf = zulu + mike;
 322:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.bind(entity)(report);
                oscar = mike.height;
                mike = 10;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = _closure2_slot3;
                mike = {};
                report = _closure1_slot3;
                romeo = report.PANEL;
                report = 0;
                if(!(foxtrot === romeo)) { _fun121679_ip = 413; continue _fun121679 }
 389:
                offset = offset.mode;
                verify = _closure1_slot5;
                verify = verify.FLOATING_DEFAULT;
                report = 0;
                if(!(offset === verify)) { _fun121679_ip = 413; continue _fun121679 }
 410:
                report = oscar;
 413:
                mike['top'] = report;
                report = global;
                oscar = report.Math;
                report = oscar.max;
                report = report.bind(oscar)(golf, options);
                mike['bottom'] = report;
                mike = tango.bind(entity)(zulu, mike);
 446:
                return entity;
            }
        };
        golf = {};
        options = 6;
        options = yankee[options];
        options = romeo.bind(offset)(options);
        options = options.cheapWorkletShallowEqual;
        golf['cheapWorkletShallowEqual'] = options;
        options = _closure1_slot3;
        golf['VoicePanelModes'] = options;
        options = _closure1_slot5;
        golf['VoicePanelControlsModes'] = options;
        options = 60;
        golf['DEFAULT_CHANNEL_INPUT_HEIGHT'] = options;
        options = _closure1_slot6;
        golf['PIP_WINDOW_OFFSET'] = options;
        options = 7;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['getPIPBottomOffsetForPIPMode'] = options;
        options = 8;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['getAdjustedBottomOffsets'] = options;
        options = 9;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['calculateVoicePanelHeaderSpecs'] = options;
        options = 10;
        options = yankee[options];
        options = verify.bind(offset)(options);
        golf['updateSharedValueIfChanged'] = options;
        golf['pipAvoidanceSpecs'] = entity;
        mike['__closure'] = golf;
        golf = 2235944231220.0;
        mike['__workletHash'] = golf;
        oscar = _closure1_slot8;
        mike['__initData'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();