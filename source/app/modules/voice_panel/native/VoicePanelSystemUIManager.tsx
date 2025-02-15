// app/modules/voice_panel/native/VoicePanelSystemUIManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelModes;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelControlsModes;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ParticipantTypes;
    var _closure1_slot8 = tango;
    tango = 6;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot9 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot10 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = {};
    options = 'function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}';
    tango['code'] = options;
    var _closure1_slot12 = tango;
    tango = {};
    options = 'function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}';
    tango['code'] = options;
    var _closure1_slot13 = tango;
    tango = golf.memo;
    mike = function() { // Original name: VoicePanelSystemUIManager
        _fun121753: for(var _fun121753_ip = 0; ; ) switch(_fun121753_ip) {
 0:
            options = _closure1_slot4;
            zulu = options.useContext;
            report = _closure1_slot1;
            kilo = _closure1_slot2;
            mike = 7;
            mike = kilo[mike];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = zulu.bind(options)(mike);
            echo = zulu.focused;
            var _closure2_slot0 = echo;
            mike = zulu.channelId;
            var _closure2_slot1 = mike;
            result = zulu.mode;
            var _closure2_slot2 = result;
            output = zulu.controlsSpecs;
            var _closure2_slot3 = output;
            sizing = zulu.windowDimensions;
            var _closure2_slot4 = sizing;
            zulu = options.useState;
            report = true;
            zulu = zulu.bind(options)(report);
            foxtrot = _closure1_slot3;
            yankee = 2;
            zulu = foxtrot.bind(tango)(zulu, yankee);
            verify = 0;
            romeo = zulu[verify];
            golf = 1;
            zulu = zulu[golf];
            var _closure2_slot5 = zulu;
            zulu = options.useState;
            zulu = zulu.bind(options)(report);
            zulu = foxtrot.bind(tango)(zulu, yankee);
            report = zulu[verify];
            zulu = zulu[golf];
            var _closure2_slot6 = zulu;
            zulu = options.useState;
            backup = false;
            zulu = zulu.bind(options)(backup);
            zulu = foxtrot.bind(tango)(zulu, yankee);
            offset = zulu[verify];
            zulu = zulu[golf];
            var _closure2_slot7 = zulu;
            zulu = options.useState;
            zulu = zulu.bind(options)(backup);
            zulu = foxtrot.bind(tango)(zulu, yankee);
            verify = zulu[verify];
            zulu = zulu[golf];
            var _closure2_slot8 = zulu;
            golf = options.useMemo;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                oscar = function(argFoo) { // Original name: updateState
                    entity = argFoo;
                    zulu = entity.focusedId;
                    var _closure4_slot0 = zulu;
                    zulu = entity.mode;
                    var _closure4_slot1 = zulu;
                    zulu = entity.controlsMode;
                    var _closure4_slot2 = zulu;
                    entity = entity.landscape;
                    var _closure4_slot3 = entity;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 8;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        _fun121756: for(var _fun121756_ip = 0; ; ) switch(_fun121756_ip) {
 0:
                            report = _closure2_slot6;
                            oscar = _closure4_slot1;
                            entity = _closure1_slot6;
                            zulu = entity.PIP;
                            entity = undefined;
                            zulu = oscar !== zulu;
                            zulu = report.bind(entity)(zulu);
                            report = _closure4_slot2;
                            zulu = _closure1_slot7;
                            zulu = zulu.HIDDEN;
                            report = report !== zulu;
                            zulu = _closure4_slot0;
                            oscar = null;
                            options = oscar != zulu;
                            zulu = !options;
                            if(options) { _fun121756_ip = 79; continue _fun121756 }
 72:
                            options = _closure4_slot3;
                            zulu = !options;
 79:
                            if(zulu) { _fun121756_ip = 85; continue _fun121756 }
 82:
                            zulu = report;
 85:
                            report = _closure2_slot5;
                            report = report.bind(entity)(zulu);
                            report = _closure4_slot0;
                            options = oscar != report;
                            report = zulu;
                            zulu = undefined;
                            if(!options) { _fun121756_ip = 134; continue _fun121756 }
 110:
                            offset = _closure1_slot5;
                            verify = offset.getParticipant;
                            options = _closure2_slot1;
                            golf = _closure4_slot0;
                            zulu = verify.bind(offset)(options, golf);
 134:
                            golf = oscar == zulu;
                            oscar = undefined;
                            if(golf) { _fun121756_ip = 148; continue _fun121756 }
 143:
                            oscar = zulu.type;
 148:
                            zulu = _closure1_slot8;
                            zulu = zulu.ACTIVITY;
                            zulu = oscar === zulu;
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 9;
                            tango = golf[tango];
                            oscar = oscar.bind(entity)(tango);
                            tango = oscar.isIOS;
                            tango = tango.bind(oscar)();
                            oscar = !tango;
                            tango = !oscar;
                            if(oscar) { _fun121756_ip = 204; continue _fun121756 }
 201:
                            tango = zulu;
 204:
                            zulu = _closure2_slot8;
                            zulu = zulu.bind(entity)(tango);
                            zulu = _closure2_slot7;
                            mike = !report;
                            if(report) { _fun121756_ip = 226; continue _fun121756 }
 223:
                            mike = !tango;
 226:
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                var _closure3_slot0 = oscar;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = {};
                zulu = 2000;
                tango['maxWait'] = zulu;
                zulu = 500;
                zulu = report.bind(entity)(oscar, zulu, tango);
                var _closure3_slot1 = zulu;
                var _closure3_slot2 = entity;
                entity = {};
                zulu = function() { // Original name: cancelPendingDebounce
                    mike = _closure3_slot1;
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity['cancelPendingDebounce'] = zulu;
                mike = function(argFoo) { // Original name: handleStateChange
                    _fun121758: for(var _fun121758_ip = 0; ; ) switch(_fun121758_ip) {
 0:
                        zulu = argFoo;
                        tango = _closure3_slot2;
                        mike = zulu.focusedId;
                        if(!(tango === mike)) { _fun121758_ip = 47; continue _fun121758 }
 20:
                        tango = _closure3_slot1;
                        mike = tango.cancel;
                        mike = mike.bind(tango)();
                        tango = _closure3_slot0;
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        _fun121758_ip = 68; continue _fun121758;
 47:
                        mike = zulu.focusedId;
                        _closure3_slot2 = mike;
                        mike = _closure3_slot1;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 68:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleStateChange'] = mike;
                return entity;
            };
            zulu = golf.bind(options)(mike, zulu);
            mike = zulu.cancelPendingDebounce;
            var _closure2_slot9 = mike;
            yankee = zulu.handleStateChange;
            var _closure2_slot10 = yankee;
            golf = options.useEffect;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = function() {
                    mike = _closure2_slot9;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    return entity;
                };
                return entity;
            };
            mike = golf.bind(options)(mike, zulu);
            backup = _closure1_slot0;
            foxtrot = 11;
            mike = kilo[foxtrot];
            golf = backup.bind(tango)(mike);
            zulu = golf.useAnimatedReaction;
            mike = function() { // Original name: v
                _fun121761: for(var _fun121761_ip = 0; ; ) switch(_fun121761_ip) {
 0:
                    entity = {};
                    tango = _closure2_slot0;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = null;
                    report = zulu == tango;
                    zulu = undefined;
                    if(report) { _fun121761_ip = 34; continue _fun121761 }
 29:
                    zulu = tango.id;
 34:
                    entity['focusedId'] = zulu;
                    tango = _closure2_slot2;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity['mode'] = zulu;
                    tango = _closure2_slot3;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.mode;
                    entity['controlsMode'] = zulu;
                    zulu = _closure2_slot4;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    mike = mike.landscape;
                    entity['landscape'] = mike;
                    return entity;
                }
            };
            options = {};
            options['focused'] = echo;
            options['mode'] = result;
            options['controlsSpecs'] = output;
            options['windowDimensions'] = sizing;
            mike['__closure'] = options;
            options = 2478376475717.0;
            mike['__workletHash'] = options;
            options = _closure1_slot12;
            mike['__initData'] = options;
            entity = function(argFoo, argBar) { // Original name: _
                _fun121762: for(var _fun121762_ip = 0; ; ) switch(_fun121762_ip) {
 0:
                    zulu = argFoo;
                    golf = argBar;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 12;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(tango);
                    report = oscar.cheapWorkletShallowEqual;
                    tango = null;
                    options = tango != golf;
                    tango = undefined;
                    if(!options) { _fun121762_ip = 51; continue _fun121762 }
 48:
                    tango = golf;
 51:
                    tango = report.bind(oscar)(zulu, tango);
                    if(tango) { _fun121762_ip = 102; continue _fun121762 }
 60:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 11;
                    mike = report[mike];
                    report = tango.bind(entity)(mike);
                    tango = report.runOnJS;
                    mike = _closure2_slot10;
                    mike = tango.bind(report)(mike);
                    mike = mike.bind(entity)(zulu);
 102:
                    return entity;
                }
            };
            options = {};
            sizing = 12;
            sizing = kilo[sizing];
            sizing = backup.bind(tango)(sizing);
            sizing = sizing.cheapWorkletShallowEqual;
            options['cheapWorkletShallowEqual'] = sizing;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.runOnJS;
            options['runOnJS'] = foxtrot;
            options['handleStateChange'] = yankee;
            entity['__closure'] = options;
            options = 3592680244658.0;
            entity['__workletHash'] = options;
            options = _closure1_slot13;
            entity['__initData'] = options;
            entity = zulu.bind(golf)(mike, entity);
            zulu = _closure1_slot11;
            mike = _closure1_slot10;
            entity = {};
            golf = null;
            if(!report) { _fun121753_ip = 531; continue _fun121753 }
 480:
            yankee = _closure1_slot9;
            options = _closure1_slot1;
            foxtrot = _closure1_slot2;
            report = 13;
            report = foxtrot[report];
            options = options.bind(tango)(report);
            report = {};
            romeo = !romeo;
            report['hidden'] = romeo;
            romeo = 'light-content';
            report['barStyle'] = romeo;
            golf = yankee.bind(tango)(options, report);
 531:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot9;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            oscar = 14;
            oscar = yankee[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['prefersHidden'] = offset;
            oscar['prefersDeferringSystemGestures'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/VoicePanelSystemUIManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();