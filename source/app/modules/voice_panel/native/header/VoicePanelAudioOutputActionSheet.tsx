// app/modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: closeActionSheet
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 11;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.hideActionSheet;
        mike = _closure1_slot9;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: VoicePanelAudioPhoneOutputSection
        _fun103341: for(var _fun103341_ip = 0; ; ) switch(_fun103341_ip) {
 0:
            entity = _closure1_slot13;
            report = undefined;
            options = entity.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 12;
            entity = zulu[entity];
            tango = mike.bind(report)(entity);
            zulu = tango.useStateFromStoresObject;
            entity = _closure1_slot6;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                tango = _closure1_slot6;
                zulu = tango.getActiveAudioDevice;
                zulu = zulu.bind(tango)();
                entity['activeDevice'] = zulu;
                zulu = _closure1_slot6;
                mike = zulu.getAudioDevices;
                mike = mike.bind(zulu)();
                entity['availableDevices'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            offset = entity.activeDevice;
            yankee = entity.availableDevices;
            var _closure2_slot0 = yankee;
            tango = _closure1_slot3;
            zulu = tango.useCallback;
            mike = function(argFoo) {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 13;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.setAudioOutputDevice;
                zulu = argFoo;
                zulu = tango.bind(report)(zulu);
                mike = _closure1_slot14;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            var _closure2_slot1 = entity;
            mike = yankee.length;
            entity = 0;
            mike = mike > entity;
            entity = null;
            if(!mike) { _fun103341_ip = 307; continue _fun103341 }
 131:
            tango = _closure1_slot11;
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 14;
            mike = romeo[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.VoicePanelFormSection;
            mike = {};
            options = options.sectionContainer;
            mike['style'] = options;
            options = 15;
            foxtrot = romeo[options];
            foxtrot = golf.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            options = romeo[options];
            options = golf.bind(report)(options);
            options = options.t;
            options = options.CxyS19;
            options = foxtrot.bind(backup)(options);
            mike['title'] = options;
            options = _closure1_slot11;
            oscar = 16;
            oscar = romeo[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.TableRadioGroup;
            oscar = {};
            offset = offset.deviceId;
            oscar['value'] = offset;
            offset = function(argFoo) { // Original name: onChange
                _fun103344: for(var _fun103344_ip = 0; ; ) switch(_fun103344_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tango = _closure2_slot0;
                    zulu = tango.find;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.deviceId;
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != zulu)) { _fun103344_ip = 50; continue _fun103344 }
 39:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            oscar['onChange'] = offset;
            offset = yankee.map;
            verify = function(argFoo) {
                _fun103346: for(var _fun103346_ip = 0; ; ) switch(_fun103346_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot11;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 17;
                    mike = options[mike];
                    tango = undefined;
                    mike = golf.bind(tango)(mike);
                    zulu = mike.TableRadioRow;
                    mike = {};
                    verify = entity.deviceId;
                    mike['value'] = verify;
                    yankee = _closure1_slot11;
                    oscar = 18;
                    oscar = options[oscar];
                    oscar = golf.bind(tango)(oscar);
                    offset = oscar.TableRowIcon;
                    verify = {};
                    oscar = 19;
                    romeo = options[oscar];
                    romeo = golf.bind(tango)(romeo);
                    foxtrot = romeo.audioDeviceToIconMap;
                    romeo = entity.simpleDeviceType;
                    romeo = foxtrot[romeo];
                    verify['source'] = romeo;
                    verify = yankee.bind(tango)(offset, verify);
                    mike['icon'] = verify;
                    oscar = options[oscar];
                    golf = golf.bind(tango)(oscar);
                    oscar = golf.getAudioDeviceToDisplayText;
                    oscar = oscar.bind(golf)(entity);
                    mike['label'] = oscar;
                    oscar = entity.deviceName;
                    golf = null;
                    options = golf == oscar;
                    golf = undefined;
                    if(options) { _fun103346_ip = 162; continue _fun103346 }
 157:
                    golf = oscar.length;
 162:
                    oscar = 0;
                    golf = golf > oscar;
                    oscar = undefined;
                    if(!golf) { _fun103346_ip = 179; continue _fun103346 }
 173:
                    oscar = entity.deviceName;
 179:
                    mike['subLabel'] = oscar;
                    entity = entity.deviceId;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 307:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: VoicePanelAudioConsoleSection
        _fun103347: for(var _fun103347_ip = 0; ; ) switch(_fun103347_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            var _closure2_slot0 = entity;
            mike = _closure1_slot13;
            report = undefined;
            options = mike.bind(report)();
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 20;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            yankee = mike.bind(report)();
            var _closure2_slot1 = yankee;
            mike = 21;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.bind(report)();
            var _closure2_slot2 = mike;
            tango = _closure1_slot0;
            mike = 12;
            zulu = golf[mike];
            foxtrot = tango.bind(report)(zulu);
            romeo = foxtrot.useStateFromStores;
            zulu = _closure1_slot5;
            offset = new Array(1);
            offset[0] = zulu;
            zulu = function() {
                mike = _closure1_slot5;
                entity = mike.getAwaitingRemoteSessionInfo;
                entity = entity.bind(mike)();
                return entity;
            };
            foxtrot = romeo.bind(foxtrot)(offset, zulu);
            var _closure2_slot3 = foxtrot;
            mike = golf[mike];
            romeo = tango.bind(report)(mike);
            offset = romeo.useStateFromStores;
            mike = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun103349: for(var _fun103349_ip = 0; ; ) switch(_fun103349_ip) {
 0:
                    zulu = _closure1_slot8;
                    mike = zulu.getSessionById;
                    tango = _closure2_slot2;
                    entity = null;
                    oscar = entity == tango;
                    tango = undefined;
                    if(oscar) { _fun103349_ip = 41; continue _fun103349 }
 31:
                    report = _closure2_slot2;
                    tango = report.sessionId;
 41:
                    report = entity != tango;
                    entity = '';
                    if(!report) { _fun103349_ip = 55; continue _fun103349 }
 52:
                    entity = tango;
 55:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            mike = offset.bind(romeo)(zulu, mike);
            var _closure2_slot4 = mike;
            romeo = _closure1_slot3;
            offset = romeo.useMemo;
            zulu = new Array(2);
            zulu[0] = foxtrot;
            zulu[1] = mike;
            mike = function() {
                _fun103350: for(var _fun103350_ip = 0; ; ) switch(_fun103350_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = null;
                    zulu = entity == mike;
                    mike = undefined;
                    if(zulu) { _fun103350_ip = 27; continue _fun103350 }
 18:
                    zulu = _closure2_slot3;
                    mike = zulu.type;
 27:
                    if(!(entity == mike)) { _fun103350_ip = 72; continue _fun103350 }
 31:
                    zulu = _closure2_slot4;
                    report = entity == zulu;
                    zulu = undefined;
                    if(report) { _fun103350_ip = 69; continue _fun103350 }
 44:
                    tango = _closure2_slot4;
                    tango = tango.clientInfo;
                    report = entity == tango;
                    zulu = undefined;
                    if(report) { _fun103350_ip = 69; continue _fun103350 }
 63:
                    zulu = tango.os;
 69:
                    mike = zulu;
 72:
                    zulu = entity != mike;
                    entity = '';
                    if(!zulu) { _fun103350_ip = 86; continue _fun103350 }
 83:
                    entity = mike;
 86:
                    return entity;
                }
            };
            romeo = offset.bind(romeo)(mike, zulu);
            offset = _closure1_slot3;
            zulu = offset.useCallback;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = entity;
            entity = function(argFoo) {
                _fun103351: for(var _fun103351_ip = 0; ; ) switch(_fun103351_ip) {
 0:
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    tango = _closure2_slot1;
                    mike = tango.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    oscar = mike.bind(tango)(entity);
                    entity = null;
                    if(!(entity == oscar)) { _fun103351_ip = 54; continue _fun103351 }
 39:
                    mike = _closure1_slot14;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    _fun103351_ip = 103; continue _fun103351;
 54:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 22;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.onConnectToConsole;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu, oscar);
                    entity = _closure1_slot14;
                    entity = entity.bind(mike)();
 103:
                    entity = undefined;
                    return entity;
                }
            };
            offset = zulu.bind(offset)(entity, mike);
            entity = 23;
            entity = golf[entity];
            zulu = tango.bind(report)(entity);
            mike = zulu.useIsDismissibleContentTypeDismissed;
            entity = 24;
            entity = golf[entity];
            entity = tango.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.DONUT_MOBILE_NUX;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            var _closure2_slot5 = entity;
            tango = _closure1_slot3;
            zulu = tango.useEffect;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = entity;
            entity = function() {
                _fun103353: for(var _fun103353_ip = 0; ; ) switch(_fun103353_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun103353_ip = 25; continue _fun103353 }
 10:
                    mike = _closure2_slot1;
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 25:
                    if(!entity) { _fun103353_ip = 88; continue _fun103353 }
 28:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 25;
                    entity = oscar[entity];
                    tango = undefined;
                    zulu = report.bind(tango)(entity);
                    mike = zulu.markDismissibleContentAsDismissed;
                    entity = 24;
                    entity = oscar[entity];
                    entity = report.bind(tango)(entity);
                    entity = entity.DismissibleContent;
                    entity = entity.DONUT_MOBILE_NUX;
                    entity = mike.bind(zulu)(entity);
 88:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            mike = yankee.length;
            entity = 0;
            mike = mike > entity;
            entity = null;
            if(!mike) { _fun103347_ip = 506; continue _fun103347 }
 343:
            tango = _closure1_slot11;
            golf = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 14;
            mike = foxtrot[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.VoicePanelFormSection;
            mike = {};
            backup = 15;
            kilo = foxtrot[backup];
            kilo = golf.bind(report)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = foxtrot[backup];
            backup = golf.bind(report)(backup);
            backup = backup.t;
            backup = backup.q22XnZ;
            backup = kilo.bind(sizing)(backup);
            mike['title'] = backup;
            options = options.sectionContainer;
            mike['style'] = options;
            options = _closure1_slot11;
            oscar = 16;
            oscar = foxtrot[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.TableRadioGroup;
            oscar = {};
            oscar['value'] = romeo;
            oscar['onChange'] = offset;
            offset = yankee.map;
            verify = function(argFoo) {
                _fun103354: for(var _fun103354_ip = 0; ; ) switch(_fun103354_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = _closure1_slot10;
                    entity = entity.XBOX;
                    if(!(entity !== zulu)) { _fun103354_ip = 120; continue _fun103354 }
 25:
                    entity = _closure1_slot10;
                    entity = entity.PLAYSTATION;
                    golf = null;
                    if(!(entity === zulu)) { _fun103354_ip = 194; continue _fun103354 }
 44:
                    entity = {};
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 15;
                    tango = verify[zulu];
                    oscar = undefined;
                    tango = options.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.string;
                    zulu = verify[zulu];
                    zulu = options.bind(oscar)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.fFl4jo;
                    zulu = tango.bind(report)(zulu);
                    entity['label'] = zulu;
                    zulu = 'playstation';
                    entity['variant'] = zulu;
                    golf = entity;
                    _fun103354_ip = 194; continue _fun103354;
 120:
                    entity = {};
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 15;
                    tango = verify[zulu];
                    oscar = undefined;
                    tango = options.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.string;
                    zulu = verify[zulu];
                    zulu = options.bind(oscar)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.Nfvo7+;
                    zulu = tango.bind(report)(zulu);
                    entity['label'] = zulu;
                    zulu = 'xbox';
                    entity['variant'] = zulu;
                    golf = entity;
 194:
                    entity = null;
                    entity = entity != golf;
                    if(!entity) { _fun103354_ip = 343; continue _fun103354 }
 206:
                    oscar = _closure1_slot11;
                    verify = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    zulu = 17;
                    zulu = foxtrot[zulu];
                    report = undefined;
                    zulu = verify.bind(report)(zulu);
                    tango = zulu.TableRadioRow;
                    zulu = {};
                    offset = _closure1_slot11;
                    options = 18;
                    options = foxtrot[options];
                    options = verify.bind(report)(options);
                    verify = options.TableRowIcon;
                    options = {};
                    romeo = _closure1_slot1;
                    yankee = 26;
                    yankee = foxtrot[yankee];
                    romeo = romeo.bind(report)(yankee);
                    yankee = mike.type;
                    yankee = romeo.bind(report)(yankee);
                    options['source'] = yankee;
                    yankee = golf.variant;
                    options['variant'] = yankee;
                    options = offset.bind(report)(verify, options);
                    zulu['icon'] = options;
                    golf = golf.label;
                    zulu['label'] = golf;
                    golf = mike.type;
                    zulu['value'] = golf;
                    mike = mike.type;
                    entity = oscar.bind(report)(tango, zulu, mike);
 343:
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 506:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ScrollView;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PlatformTypes;
    var _closure1_slot10 = tango;
    tango = 8;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot11 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'marginTop': 0, 'marginBottom': 24};
    tango['sectionContainer'] = offset;
    offset = {'padding': 6, 'width': 32, 'height': 32, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    yankee = 10;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.round;
    offset['borderRadius'] = yankee;
    tango['deviceIcon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: VoicePanelAudioOutputActionSheet
        _fun103355: for(var _fun103355_ip = 0; ; ) switch(_fun103355_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            backup = mike.isConnectedToVoiceChannel;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.useStateFromStores;
            oscar = _closure1_slot7;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = zulu.bind(tango)(mike, entity);
            entity = null;
            mike = entity == sizing;
            if(mike) { _fun103355_ip = 317; continue _fun103355 }
 87:
            tango = _closure1_slot11;
            kilo = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 27;
            mike = romeo[mike];
            mike = kilo.bind(report)(mike);
            zulu = mike.BottomSheet;
            mike = {};
            options = _closure1_slot11;
            oscar = 28;
            oscar = romeo[oscar];
            oscar = kilo.bind(report)(oscar);
            golf = oscar.BottomSheetTitleHeader;
            oscar = {};
            verify = 15;
            offset = romeo[verify];
            offset = kilo.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = romeo[verify];
            verify = kilo.bind(report)(verify);
            verify = verify.t;
            verify = verify.iwxPMz;
            verify = offset.bind(yankee)(verify);
            oscar['title'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['header'] = oscar;
            options = _closure1_slot11;
            golf = _closure1_slot4;
            oscar = {};
            yankee = _closure1_slot12;
            offset = _closure1_slot1;
            verify = 29;
            verify = romeo[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            if(!backup) { _fun103355_ip = 255; continue _fun103355 }
 239:
            output = _closure1_slot11;
            kilo = _closure1_slot15;
            romeo = {};
            backup = output.bind(report)(kilo, romeo);
 255:
            romeo = new Array(2);
            romeo[0] = backup;
            kilo = _closure1_slot11;
            backup = _closure1_slot16;
            foxtrot = {};
            foxtrot['channel'] = sizing;
            foxtrot = kilo.bind(report)(backup, foxtrot);
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(report)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 317:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();