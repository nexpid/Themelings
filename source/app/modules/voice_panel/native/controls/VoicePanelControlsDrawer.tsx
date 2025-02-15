// app/modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: renderControls
        tango = _closure1_slot7;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 8;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        report = argFoo;
        entity['isVisible'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: renderChat
        tango = _closure1_slot7;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 9;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        report = argFoo;
        entity['shown'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = romeo.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    report = golf[mike];
    mike = argCorge;
    options = mike.bind(entity)(report);
    var _closure1_slot4 = options;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = report;
    mike = mike.VoicePanelModes;
    var _closure1_slot6 = mike;
    mike = 3;
    report = golf[mike];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot8 = mike;
    mike = 4;
    mike = golf[mike];
    verify = oscar.bind(entity)(mike);
    report = verify.createStyles;
    mike = {};
    offset = {'flex': 1, 'zIndex': 1};
    yankee = 5;
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_SECONDARY;
    offset['backgroundColor'] = yankee;
    mike['drawer'] = offset;
    mike = report.bind(verify)(mike);
    var _closure1_slot9 = mike;
    report = options.memo;
    mike = function(argFoo) {
        _fun122438: for(var _fun122438_ip = 0; ; ) switch(_fun122438_ip) {
 0:
            mike = argFoo;
            zulu = mike.shown;
            var _closure2_slot0 = zulu;
            offset = mike.renderContent;
            var _closure2_slot1 = offset;
            report = undefined;
            var _closure2_slot3 = report;
            golf = _closure1_slot4;
            oscar = golf.useState;
            tango = !zulu;
            golf = oscar.bind(golf)(tango);
            oscar = _closure1_slot3;
            tango = 2;
            oscar = oscar.bind(report)(golf, tango);
            tango = 0;
            golf = oscar[tango];
            tango = 1;
            oscar = oscar[tango];
            var _closure2_slot2 = oscar;
            tango = zulu;
            if(!tango) { _fun122438_ip = 90; continue _fun122438 }
 87:
            tango = golf;
 90:
            if(!tango) { _fun122438_ip = 101; continue _fun122438 }
 93:
            tango = !zulu;
            tango = oscar.bind(report)(tango);
 101:
            verify = _closure1_slot4;
            tango = verify.useRef;
            tango = tango.bind(verify)(zulu);
            _closure2_slot3 = tango;
            options = verify.useEffect;
            oscar = function() {
                _fun122439: for(var _fun122439_ip = 0; ; ) switch(_fun122439_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = mike.current;
                    if(entity) { _fun122439_ip = 19; continue _fun122439 }
 15:
                    entity = _closure2_slot0;
 19:
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            oscar = options.bind(verify)(oscar);
            yankee = verify.useEffect;
            options = new Array(1);
            options[0] = zulu;
            oscar = function() {
                _fun122440: for(var _fun122440_ip = 0; ; ) switch(_fun122440_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = undefined;
                    if(zulu) { _fun122440_ip = 54; continue _fun122440 }
 14:
                    zulu = global;
                    report = zulu.setTimeout;
                    tango = function() {
                        zulu = _closure2_slot2;
                        mike = undefined;
                        entity = true;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    zulu = 1000;
                    zulu = report.bind(entity)(tango, zulu);
                    var _closure3_slot0 = zulu;
                    mike = function() {
                        entity = global;
                        zulu = entity.clearTimeout;
                        mike = _closure3_slot0;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    return mike;
 54:
                    return entity;
                }
            };
            oscar = yankee.bind(verify)(oscar, options);
            options = verify.useMemo;
            oscar = new Array(2);
            oscar[0] = offset;
            oscar[1] = zulu;
            entity = function() {
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            oscar = options.bind(verify)(entity, oscar);
            options = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            entity = options.bind(report)(entity);
            entity = entity.bind(report)(tango);
            if(entity) { _fun122438_ip = 225; continue _fun122438 }
 220:
            entity = null;
            if(!zulu) { _fun122438_ip = 272; continue _fun122438 }
 225:
            tango = _closure1_slot7;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 7;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Freeze;
            mike = {};
            mike['freeze'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 272:
            return entity;
        }
    };
    mike = report.bind(options)(mike);
    var _closure1_slot10 = mike;
    report = {};
    verify = 'function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}';
    report['code'] = verify;
    var _closure1_slot11 = report;
    report = {};
    verify = 'function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}';
    report['code'] = verify;
    var _closure1_slot12 = report;
    report = {};
    verify = 'function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}';
    report['code'] = verify;
    var _closure1_slot13 = report;
    report = options.memo;
    tango = function(argFoo) { // Original name: VoicePanelControlsDrawer
        _fun122444: for(var _fun122444_ip = 0; ; ) switch(_fun122444_ip) {
 0:
            entity = argFoo;
            romeo = entity.tab;
            zulu = entity.sharedTab;
            output = entity.wrapperSpecs;
            var _closure2_slot0 = output;
            foxtrot = entity.gestureSpecs;
            var _closure2_slot1 = foxtrot;
            options = _closure1_slot4;
            report = options.useContext;
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 10;
            entity = tango[entity];
            tango = undefined;
            entity = golf.bind(tango)(entity);
            entity = report.bind(options)(entity);
            kilo = entity.mode;
            var _closure2_slot2 = kilo;
            echo = entity.windowDimensions;
            var _closure2_slot3 = echo;
            backup = entity.safeArea;
            var _closure2_slot4 = backup;
            entity = _closure1_slot9;
            report = entity.bind(tango)();
            golf = options.useState;
            entity = null;
            entity = entity == romeo;
            options = golf.bind(options)(entity);
            golf = _closure1_slot3;
            entity = 2;
            golf = golf.bind(tango)(options, entity);
            entity = 0;
            offset = golf[entity];
            entity = 1;
            sizing = golf[entity];
            var _closure2_slot5 = sizing;
            entity = zulu.get;
            entity = entity.bind(zulu)();
            entity = romeo !== entity;
            if(!entity) { _fun122444_ip = 179; continue _fun122444 }
 176:
            entity = offset;
 179:
            if(!entity) { _fun122444_ip = 189; continue _fun122444 }
 182:
            entity = false;
            entity = sizing.bind(tango)(entity);
 189:
            result = _closure1_slot0;
            options = _closure1_slot2;
            entity = 11;
            zulu = options[entity];
            verify = result.bind(tango)(zulu);
            golf = verify.useAnimatedStyle;
            zulu = function() { // Original name: y
                _fun122445: for(var _fun122445_ip = 0; ; ) switch(_fun122445_ip) {
 0:
                    entity = {};
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 12;
                    zulu = golf[zulu];
                    report = undefined;
                    yankee = oscar.bind(report)(zulu);
                    offset = yankee.getControlsDrawerOpenWidth;
                    options = _closure2_slot3;
                    tango = options.get;
                    tango = tango.bind(options)();
                    verify = tango.width;
                    romeo = _closure2_slot4;
                    tango = romeo.get;
                    tango = tango.bind(romeo)();
                    options = tango.left;
                    tango = romeo.get;
                    tango = tango.bind(romeo)();
                    tango = tango.right;
                    tango = offset.bind(yankee)(verify, options, tango);
                    entity['width'] = tango;
                    tango = 13;
                    tango = golf[tango];
                    report = oscar.bind(report)(tango);
                    tango = report.withSpring;
                    oscar = _closure2_slot0;
                    zulu = oscar.get;
                    zulu = zulu.bind(oscar)();
                    oscar = zulu.height;
                    zulu = 200;
                    oscar = oscar >= zulu;
                    zulu = 0;
                    if(!oscar) { _fun122445_ip = 147; continue _fun122445 }
 144:
                    zulu = 1;
 147:
                    mike = _closure1_slot5;
                    mike = tango.bind(report)(zulu, mike);
                    entity['opacity'] = mike;
                    return entity;
                }
            };
            yankee = {};
            update = 12;
            update = options[update];
            update = result.bind(tango)(update);
            update = update.getControlsDrawerOpenWidth;
            yankee['getControlsDrawerOpenWidth'] = update;
            yankee['windowDimensions'] = echo;
            yankee['safeArea'] = backup;
            backup = 13;
            backup = options[backup];
            backup = result.bind(tango)(backup);
            backup = backup.withSpring;
            yankee['withSpring'] = backup;
            yankee['wrapperSpecs'] = output;
            backup = 200;
            yankee['TRANSITIONAL_HEIGHT'] = backup;
            backup = _closure1_slot5;
            yankee['MODE_CHANGE_PHYSICS'] = backup;
            zulu['__closure'] = yankee;
            yankee = 8777106499672.0;
            zulu['__workletHash'] = yankee;
            yankee = _closure1_slot11;
            zulu['__initData'] = yankee;
            golf = golf.bind(verify)(zulu);
            zulu = options[entity];
            backup = result.bind(tango)(zulu);
            yankee = backup.useAnimatedReaction;
            verify = function() { // Original name: x
                zulu = _closure2_slot0;
                entity = zulu.get;
                entity = entity.bind(zulu)();
                zulu = entity.drawerMode;
                entity = new Array(2);
                entity[0] = zulu;
                zulu = _closure2_slot2;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            zulu = {};
            zulu['wrapperSpecs'] = output;
            zulu['mode'] = kilo;
            verify['__closure'] = zulu;
            zulu = 16802013961309.0;
            verify['__workletHash'] = zulu;
            zulu = _closure1_slot12;
            verify['__initData'] = zulu;
            zulu = function(argFoo, argBar) { // Original name: M
                _fun122447: for(var _fun122447_ip = 0; ; ) switch(_fun122447_ip) {
 0:
                    oscar = argFoo;
                    golf = argBar;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 14;
                    zulu = zulu[entity];
                    entity = undefined;
                    options = tango.bind(entity)(zulu);
                    report = options.cheapWorkletArrayShallowEqual;
                    tango = null;
                    verify = tango != golf;
                    zulu = undefined;
                    if(!verify) { _fun122447_ip = 51; continue _fun122447 }
 48:
                    zulu = golf;
 51:
                    zulu = report.bind(options)(oscar, zulu);
                    if(zulu) { _fun122447_ip = 225; continue _fun122447 }
 63:
                    report = _closure1_slot3;
                    zulu = 2;
                    report = report.bind(entity)(oscar, zulu);
                    options = 0;
                    zulu = report[options];
                    oscar = 1;
                    report = report[oscar];
                    tango = tango != golf;
                    if(!tango) { _fun122447_ip = 104; continue _fun122447 }
 96:
                    options = golf[options];
                    tango = zulu === options;
 104:
                    if(!tango) { _fun122447_ip = 115; continue _fun122447 }
 107:
                    oscar = golf[oscar];
                    tango = report === oscar;
 115:
                    if(tango) { _fun122447_ip = 225; continue _fun122447 }
 118:
                    tango = _closure1_slot6;
                    tango = tango.PANEL;
                    if(!(report === tango)) { _fun122447_ip = 135; continue _fun122447 }
 132:
                    if(zulu) { _fun122447_ip = 181; continue _fun122447 }
 135:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 11;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.runOnJS;
                    zulu = _closure2_slot5;
                    tango = tango.bind(report)(zulu);
                    zulu = true;
                    zulu = tango.bind(entity)(zulu);
                    _fun122447_ip = 225; continue _fun122447;
 181:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 11;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.runOnJS;
                    mike = _closure2_slot5;
                    zulu = zulu.bind(tango)(mike);
                    mike = false;
                    mike = zulu.bind(entity)(mike);
 225:
                    return entity;
                }
            };
            kilo = {};
            output = 14;
            output = options[output];
            output = result.bind(tango)(output);
            output = output.cheapWorkletArrayShallowEqual;
            kilo['cheapWorkletArrayShallowEqual'] = output;
            output = _closure1_slot6;
            kilo['VoicePanelModes'] = output;
            output = options[entity];
            output = result.bind(tango)(output);
            output = output.runOnJS;
            kilo['runOnJS'] = output;
            kilo['setFreeze'] = sizing;
            zulu['__closure'] = kilo;
            kilo = 10375596551326.0;
            zulu['__workletHash'] = kilo;
            kilo = _closure1_slot13;
            zulu['__initData'] = kilo;
            zulu = yankee.bind(backup)(verify, zulu);
            yankee = _closure1_slot4;
            verify = yankee.useCallback;
            zulu = new Array(1);
            zulu[0] = foxtrot;
            mike = function() {
                tango = _closure1_slot7;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 15;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = _closure2_slot1;
                entity['gestureSpecs'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            verify = verify.bind(yankee)(mike, zulu);
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            options = report.drawer;
            report = new Array(2);
            report[0] = options;
            report[1] = golf;
            entity['style'] = report;
            options = _closure1_slot7;
            golf = _closure1_slot10;
            report = {};
            yankee = !offset;
            if(!yankee) { _fun122444_ip = 604; continue _fun122444 }
 596:
            foxtrot = 'settings';
            yankee = foxtrot === romeo;
 604:
            report['shown'] = yankee;
            yankee = _closure1_slot14;
            report['renderContent'] = yankee;
            golf = options.bind(tango)(golf, report);
            report = new Array(3);
            report[0] = golf;
            yankee = _closure1_slot7;
            options = _closure1_slot10;
            golf = {};
            foxtrot = !offset;
            if(!foxtrot) { _fun122444_ip = 656; continue _fun122444 }
 648:
            backup = 'chat';
            foxtrot = backup === romeo;
 656:
            golf['shown'] = foxtrot;
            foxtrot = _closure1_slot15;
            golf['renderContent'] = foxtrot;
            golf = yankee.bind(tango)(options, golf);
            report[1] = golf;
            options = _closure1_slot7;
            golf = _closure1_slot10;
            oscar = {};
            offset = !offset;
            if(!offset) { _fun122444_ip = 706; continue _fun122444 }
 696:
            yankee = 'app_launcher';
            offset = yankee === romeo;
 706:
            oscar['shown'] = offset;
            oscar['renderContent'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['LazyContentFreezer'] = mike;
    return entity;
})();