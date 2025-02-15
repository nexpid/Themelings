// app/modules/media_keyboard/native/components/MediaKeyboard.tsx
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MediaKeyboardTarget;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot6 = options;
    tango = tango.ChatInputComponentViewedTypes;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: MediaKeyboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.channel;
            var _closure2_slot0 = backup;
            offset = entity.chatInputRef;
            var _closure2_slot1 = offset;
            output = entity.onClose;
            report = entity.transitionState;
            verify = _closure1_slot3;
            zulu = verify.useEffect;
            entity = backup.id;
            mike = new Array(2);
            mike[0] = entity;
            entity = backup.guild_id;
            mike[1] = entity;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot6;
                zulu = mike.CHAT_INPUT_COMPONENT_VIEWED;
                mike = {};
                oscar = _closure1_slot7;
                oscar = oscar.MEDIA_PICKER;
                mike['type'] = oscar;
                oscar = _closure2_slot0;
                golf = oscar.id;
                mike['channel_id'] = golf;
                oscar = oscar.guild_id;
                mike['guild_id'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity = zulu.bind(verify)(entity, mike);
            zulu = verify.useContext;
            mike = _closure1_slot0;
            kilo = _closure1_slot2;
            entity = 8;
            entity = kilo[entity];
            tango = undefined;
            entity = mike.bind(tango)(entity);
            entity = entity.PortalKeyboardContext;
            entity = zulu.bind(verify)(entity);
            zulu = entity.animatedSheetIndex;
            var _closure2_slot2 = zulu;
            entity = entity.bottomSheetRefs;
            entity = entity.media;
            var _closure2_slot3 = entity;
            zulu = 9;
            zulu = kilo[zulu];
            yankee = mike.bind(tango)(zulu);
            options = yankee.useStateFromStores;
            zulu = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                entity = _closure1_slot4;
                entity = entity.mediaKeyboardContext;
                return entity;
            };
            options = options.bind(yankee)(oscar, zulu);
            var _closure2_slot4 = options;
            zulu = 10;
            zulu = kilo[zulu];
            yankee = mike.bind(tango)(zulu);
            oscar = yankee.getMediaKeyboardDraftType;
            zulu = options.target;
            romeo = oscar.bind(yankee)(zulu);
            var _closure2_slot5 = romeo;
            oscar = verify.useMemo;
            zulu = new Array(5);
            zulu[0] = backup;
            zulu[1] = offset;
            zulu[2] = options;
            zulu[3] = romeo;
            zulu[4] = entity;
            entity = function() {
                entity = function(argFoo) { // Original name: onAttachFileParams
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = {};
                    tango = _closure2_slot0;
                    entity['channel'] = tango;
                    zulu = _closure2_slot4;
                    tango = zulu.target;
                    zulu = _closure1_slot5;
                    zulu = zulu.CHAT;
                    zulu = tango === zulu;
                    entity['pickMultiple'] = zulu;
                    zulu = function() { // Original name: onDismissKeyboard
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.dismissKeyboard;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    entity['onDismissKeyboard'] = zulu;
                    zulu = function() { // Original name: onRestoreKeyboard
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = _closure2_slot4;
                            mike = entity.target;
                            entity = _closure1_slot5;
                            entity = entity.APP_LAUNCHER;
                            if(!(mike !== entity)) { _fun00004_ip = 75; continue _fun00003 }
 30:
                            entity = _closure2_slot1;
                            zulu = entity.current;
                            mike = zulu.openCustomKeyboard;
                            entity = {};
                            report = _closure1_slot8;
                            report = report.MEDIA;
                            entity['keyboardType'] = report;
                            tango = _closure2_slot4;
                            entity['context'] = tango;
                            entity = mike.bind(zulu)(entity);
 75:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['onRestoreKeyboard'] = zulu;
                    mike = function(argFoo) { // Original name: onSelectFiles
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            report = argFoo;
                            mike = _closure2_slot4;
                            tango = mike.target;
                            zulu = _closure1_slot5;
                            zulu = zulu.CHAT;
                            if(!(tango !== zulu)) { _fun00006_ip = 100; continue _fun00005 }
 33:
                            oscar = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 10;
                            tango = tango[zulu];
                            zulu = undefined;
                            offset = oscar.bind(zulu)(tango);
                            verify = offset.addAttachmentForCommand;
                            zulu = _closure2_slot0;
                            kilo = zulu.id;
                            backup = _closure2_slot1;
                            zulu = 0;
                            foxtrot = report[zulu];
                            romeo = _closure2_slot4;
                            yankee = _closure4_slot0;
                            sizing = offset;
                            zulu = sizing[verify](kilo, backup, foxtrot, romeo, yankee, offset);
                            _fun00006_ip = 151; continue _fun00005;
 100:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 10;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.addImagesFromPicker;
                            entity = _closure2_slot0;
                            mike = entity.id;
                            entity = _closure4_slot0;
                            entity = zulu.bind(tango)(mike, report, entity);
 151:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['onSelectFiles'] = mike;
                    return entity;
                };
                var _closure3_slot0 = entity;
                entity = {};
                zulu = function() { // Original name: onAttachPress
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 10;
                    mike = options[entity];
                    entity = undefined;
                    tango = golf.bind(entity)(mike);
                    zulu = tango.handleAttachFile;
                    mike = {};
                    oscar = _closure3_slot0;
                    report = 12;
                    report = options[report];
                    report = golf.bind(entity)(report);
                    report = report.UploadOrigin;
                    report = report.FILE_ATTACHMENT;
                    verify = oscar.bind(entity)(report);
                    offset = mike;
                    report = copyDataProperties(offset, verify);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['onAttachPress'] = zulu;
                zulu = function(argFoo) { // Original name: onPressCamera
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 10;
                    mike = options[entity];
                    entity = undefined;
                    tango = golf.bind(entity)(mike);
                    zulu = tango.handleCameraDialog;
                    mike = {};
                    oscar = _closure3_slot0;
                    report = 12;
                    report = options[report];
                    report = golf.bind(entity)(report);
                    report = report.UploadOrigin;
                    report = report.IMAGE_PICKER;
                    verify = oscar.bind(entity)(report);
                    offset = mike;
                    report = copyDataProperties(offset, verify);
                    oscar = argFoo;
                    report = 'previewType';
                    mike[report] = oscar;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['onPressCamera'] = zulu;
                zulu = function() { // Original name: onViewAll
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 10;
                        mike = report[entity];
                        entity = undefined;
                        golf = tango.bind(entity)(mike);
                        oscar = golf.handleViewAllDialog;
                        zulu = {};
                        options = _closure3_slot0;
                        mike = 12;
                        mike = report[mike];
                        mike = tango.bind(entity)(mike);
                        mike = mike.UploadOrigin;
                        mike = mike.IMAGE_PICKER;
                        offset = options.bind(entity)(mike);
                        yankee = zulu;
                        mike = copyDataProperties(yankee, offset);
                        verify = _closure2_slot5;
                        options = 'draftType';
                        zulu[options] = verify;
                        zulu = oscar.bind(golf)(zulu);
                        zulu = 13;
                        zulu = report[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isAndroid;
                        zulu = zulu.bind(tango)();
                        if(!zulu) { _fun00008_ip = 146; continue _fun00007 }
 121:
                        mike = _closure2_slot3;
                        zulu = mike.current;
                        mike = null;
                        if(!(mike != zulu)) { _fun00008_ip = 146; continue _fun00007 }
 136:
                        mike = zulu.collapse;
                        mike = mike.bind(zulu)();
 146:
                        return entity;
                    }
                };
                entity['onViewAll'] = zulu;
                zulu = function(argFoo, argBar, argBaz, argCorge) { // Original name: onSelectItem
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        oscar = argFoo;
                        report = argBar;
                        entity = _closure2_slot4;
                        tango = entity.target;
                        zulu = _closure1_slot5;
                        zulu = zulu.CHAT;
                        if(!(tango !== zulu)) { _fun00010_ip = 87; continue _fun00009 }
 36:
                        golf = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 10;
                        tango = tango[zulu];
                        zulu = undefined;
                        golf = golf.bind(zulu)(tango);
                        tango = golf.handleSelectAppLauncherItem;
                        offset = _closure2_slot1;
                        options = _closure2_slot4;
                        romeo = golf;
                        yankee = oscar;
                        verify = report;
                        mike = romeo[tango](yankee, offset, verify, options, golf);
                        _fun00010_ip = 134; continue _fun00009;
 87:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.handleSelectKeyboardItem;
                        verify = argBaz;
                        options = argCorge;
                        romeo = tango;
                        yankee = oscar;
                        offset = report;
                        entity = romeo[zulu](yankee, offset, verify, options, golf);
 134:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onSelectItem'] = zulu;
                zulu = function() { // Original name: onPollsPress
                    entity = _closure2_slot1;
                    mike = entity.current;
                    entity = mike.closeCustomKeyboard;
                    entity = entity.bind(mike)();
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 14;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openCreatePollModal;
                    mike = {};
                    report = _closure2_slot0;
                    mike['channel'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['onPollsPress'] = zulu;
                mike = function() { // Original name: onSend
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        mike = _closure2_slot3;
                        zulu = mike.current;
                        mike = null;
                        if(!(mike != zulu)) { _fun00012_ip = 28; continue _fun00011 }
 18:
                        mike = zulu.collapse;
                        mike = mike.bind(zulu)();
 28:
                        entity = _closure2_slot1;
                        mike = entity.current;
                        entity = mike.handleSend;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onSend'] = mike;
                return entity;
            };
            entity = oscar.bind(verify)(entity, zulu);
            zulu = entity.onAttachPress;
            var _closure2_slot6 = zulu;
            yankee = entity.onPressCamera;
            verify = entity.onViewAll;
            var _closure2_slot7 = verify;
            zulu = entity.onPollsPress;
            var _closure2_slot8 = zulu;
            offset = entity.onSelectItem;
            sizing = entity.onSend;
            entity = 15;
            entity = kilo[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useCanPostPollsInChannel;
            entity = entity.bind(mike)(backup);
            var _closure2_slot9 = entity;
            oscar = _closure1_slot1;
            entity = 16;
            entity = kilo[entity];
            entity = oscar.bind(tango)(entity);
            foxtrot = entity.bind(tango)(backup);
            var _closure2_slot10 = foxtrot;
            zulu = _closure1_slot10;
            entity = 17;
            entity = kilo[entity];
            mike = oscar.bind(tango)(entity);
            entity = {};
            echo = _closure1_slot9;
            entity['animationConfigs'] = echo;
            entity['channel'] = backup;
            entity['draftType'] = romeo;
            result = function(argFoo) { // Original name: handleComponent
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tango = _closure1_slot10;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 18;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    offset = argFoo;
                    yankee = entity;
                    report = copyDataProperties(yankee, offset);
                    verify = _closure2_slot0;
                    options = 'channel';
                    entity[options] = verify;
                    options = _closure2_slot9;
                    verify = !options;
                    options = 'disablePolls';
                    entity[options] = verify;
                    verify = _closure2_slot10;
                    options = 'disableAttach';
                    entity[options] = verify;
                    verify = _closure2_slot5;
                    options = 'draftType';
                    entity[options] = verify;
                    verify = _closure2_slot6;
                    options = 'onAttachPress';
                    entity[options] = verify;
                    verify = _closure2_slot8;
                    options = 'onPollsPress';
                    entity[options] = verify;
                    verify = _closure2_slot7;
                    options = 'onViewAll';
                    entity[options] = verify;
                    verify = function() { // Original name: onBack
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure2_slot3;
                            zulu = entity.current;
                            entity = null;
                            mike = entity == zulu;
                            entity = undefined;
                            if(mike) { _fun00016_ip = 33; continue _fun00015 }
 23:
                            mike = zulu.collapse;
                            entity = mike.bind(zulu)();
 33:
                            return entity;
                        }
                    };
                    options = 'onBack';
                    entity[options] = verify;
                    options = function() { // Original name: onPress
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zulu = _closure2_slot2;
                            entity = zulu.get;
                            zulu = entity.bind(zulu)();
                            entity = 0;
                            if(!(entity !== zulu)) { _fun00018_ip = 54; continue _fun00017 }
 22:
                            entity = _closure2_slot3;
                            tango = entity.current;
                            entity = null;
                            zulu = entity == tango;
                            entity = undefined;
                            if(zulu) { _fun00018_ip = 52; continue _fun00017 }
 42:
                            zulu = tango.collapse;
                            entity = zulu.bind(tango)();
 52:
                            _fun00018_ip = 87; continue _fun00017;
 54:
                            mike = _closure2_slot3;
                            tango = mike.current;
                            mike = null;
                            zulu = mike == tango;
                            mike = undefined;
                            if(zulu) { _fun00018_ip = 84; continue _fun00017 }
 74:
                            zulu = tango.expand;
                            mike = zulu.bind(tango)();
 84:
                            entity = mike;
 87:
                            return entity;
                        }
                    };
                    golf = 'onPress';
                    entity[golf] = options;
                    golf = _closure2_slot4;
                    options = golf.target;
                    oscar = _closure1_slot5;
                    golf = oscar.CHAT;
                    oscar = undefined;
                    if(!(options !== golf)) { _fun00014_ip = 208; continue _fun00013 }
 198:
                    report = _closure2_slot4;
                    oscar = report.option;
 208:
                    report = 'singleItemConfig';
                    entity[report] = oscar;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            entity['handleComponent'] = result;
            entity['onClose'] = output;
            entity['onSend'] = sizing;
            entity['transitionState'] = report;
            report = 19;
            report = kilo[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['channel'] = backup;
            report['disabled'] = foxtrot;
            report['draftType'] = romeo;
            report['onPressCamera'] = yankee;
            report['onSelectItem'] = offset;
            report['onViewAll'] = verify;
            offset = options.target;
            golf = _closure1_slot5;
            verify = golf.CHAT;
            golf = undefined;
            if(!(offset !== verify)) { _fun00002_ip = 502; continue _fun00001 }
 496:
            golf = options.option;
 502:
            report['singleItemConfig'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_keyboard/native/components/MediaKeyboard.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();