// app/modules/media_keyboard/native/components/MediaKeyboard.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MediaKeyboardTarget;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot6 = option;
    tangon = tangon.ChatInputComponentViewedTypes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: MediaKeyboard
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
            zuuluu = verify.useEffect;
            entity = backup.id;
            michal = new Array(2);
            michal[0] = entity;
            entity = backup.guild_id;
            michal[1] = entity;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot6;
                zuuluu = michal.CHAT_INPUT_COMPONENT_VIEWED;
                michal = {};
                oscard = _closure1_slot7;
                oscard = oscard.MEDIA_PICKER;
                michal['type'] = oscard;
                oscard = _closure2_slot0;
                golfie = oscard.id;
                michal['channel_id'] = golfie;
                oscard = oscard.guild_id;
                michal['guild_id'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity = zuuluu.bind(verify)(entity, michal);
            zuuluu = verify.useContext;
            michal = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 7;
            entity = kiloes[entity];
            tangon = undefined;
            entity = michal.bind(tangon)(entity);
            entity = entity.PortalKeyboardContext;
            entity = zuuluu.bind(verify)(entity);
            zuuluu = entity.animatedSheetIndex;
            var _closure2_slot2 = zuuluu;
            entity = entity.bottomSheetRefs;
            entity = entity.media;
            var _closure2_slot3 = entity;
            zuuluu = 8;
            zuuluu = kiloes[zuuluu];
            yankee = michal.bind(tangon)(zuuluu);
            option = yankee.useStateFromStores;
            zuuluu = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot4;
                entity = entity.mediaKeyboardContext;
                return entity;
            };
            option = option.bind(yankee)(oscard, zuuluu);
            var _closure2_slot4 = option;
            zuuluu = 9;
            zuuluu = kiloes[zuuluu];
            yankee = michal.bind(tangon)(zuuluu);
            oscard = yankee.getMediaKeyboardDraftType;
            zuuluu = option.target;
            romeon = oscard.bind(yankee)(zuuluu);
            var _closure2_slot5 = romeon;
            oscard = verify.useMemo;
            zuuluu = new Array(5);
            zuuluu[0] = backup;
            zuuluu[1] = offset;
            zuuluu[2] = option;
            zuuluu[3] = romeon;
            zuuluu[4] = entity;
            entity = function() {
                entity = function(argFoo) { // Original name: onAttachFileParams
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = {};
                    tangon = _closure2_slot0;
                    entity['channel'] = tangon;
                    zuuluu = _closure2_slot4;
                    tangon = zuuluu.target;
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.CHAT;
                    zuuluu = tangon === zuuluu;
                    entity['pickMultiple'] = zuuluu;
                    zuuluu = function() { // Original name: onDismissKeyboard
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.dismissKeyboard;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    entity['onDismissKeyboard'] = zuuluu;
                    zuuluu = function() { // Original name: onRestoreKeyboard
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = _closure2_slot4;
                            michal = entity.target;
                            entity = _closure1_slot5;
                            entity = entity.APP_LAUNCHER;
                            if(!(michal !== entity)) { _fun00004_ip = 98; continue _fun00003 }
 30:
                            entity = _closure2_slot1;
                            zuuluu = entity.current;
                            michal = zuuluu.openCustomKeyboard;
                            entity = {};
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            report = 11;
                            oscard = oscard[report];
                            report = undefined;
                            report = golfie.bind(report)(oscard);
                            report = report.KeyboardTypes;
                            report = report.MEDIA;
                            entity['type'] = report;
                            tangon = _closure2_slot4;
                            entity['context'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 98:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['onRestoreKeyboard'] = zuuluu;
                    michal = function(argFoo) { // Original name: onSelectFiles
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            report = argFoo;
                            michal = _closure2_slot4;
                            tangon = michal.target;
                            zuuluu = _closure1_slot5;
                            zuuluu = zuuluu.CHAT;
                            if(!(tangon !== zuuluu)) { _fun00006_ip = 100; continue _fun00005 }
 33:
                            oscard = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 9;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            offset = oscard.bind(zuuluu)(tangon);
                            verify = offset.addAttachmentForCommand;
                            zuuluu = _closure2_slot0;
                            kiloes = zuuluu.id;
                            backup = _closure2_slot1;
                            zuuluu = 0;
                            foxtra = report[zuuluu];
                            romeon = _closure2_slot4;
                            yankee = _closure4_slot0;
                            sizing = offset;
                            zuuluu = sizing[verify](kiloes, backup, foxtra, romeon, yankee, offset);
                            _fun00006_ip = 151; continue _fun00005;
 100:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 9;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.addImagesFromPicker;
                            entity = _closure2_slot0;
                            michal = entity.id;
                            entity = _closure4_slot0;
                            entity = zuuluu.bind(tangon)(michal, report, entity);
 151:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['onSelectFiles'] = michal;
                    return entity;
                };
                var _closure3_slot0 = entity;
                entity = {};
                zuuluu = function() { // Original name: onAttachPress
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 9;
                    michal = option[entity];
                    entity = undefined;
                    tangon = golfie.bind(entity)(michal);
                    zuuluu = tangon.handleAttachFile;
                    michal = {};
                    oscard = _closure3_slot0;
                    report = 12;
                    report = option[report];
                    report = golfie.bind(entity)(report);
                    report = report.UploadOrigin;
                    report = report.FILE_ATTACHMENT;
                    verify = oscard.bind(entity)(report);
                    offset = michal;
                    report = copyDataProperties(offset, verify);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['onAttachPress'] = zuuluu;
                zuuluu = function(argFoo) { // Original name: onPressCamera
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 9;
                    michal = option[entity];
                    entity = undefined;
                    tangon = golfie.bind(entity)(michal);
                    zuuluu = tangon.handleCameraDialog;
                    michal = {};
                    oscard = _closure3_slot0;
                    report = 12;
                    report = option[report];
                    report = golfie.bind(entity)(report);
                    report = report.UploadOrigin;
                    report = report.IMAGE_PICKER;
                    verify = oscard.bind(entity)(report);
                    offset = michal;
                    report = copyDataProperties(offset, verify);
                    oscard = argFoo;
                    report = 'previewType';
                    michal[report] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['onPressCamera'] = zuuluu;
                zuuluu = function() { // Original name: onViewAll
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 9;
                        michal = report[entity];
                        entity = undefined;
                        golfie = tangon.bind(entity)(michal);
                        oscard = golfie.handleViewAllDialog;
                        zuuluu = {};
                        option = _closure3_slot0;
                        michal = 12;
                        michal = report[michal];
                        michal = tangon.bind(entity)(michal);
                        michal = michal.UploadOrigin;
                        michal = michal.IMAGE_PICKER;
                        offset = option.bind(entity)(michal);
                        yankee = zuuluu;
                        michal = copyDataProperties(yankee, offset);
                        verify = _closure2_slot5;
                        option = 'draftType';
                        zuuluu[option] = verify;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        zuuluu = 13;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isAndroid;
                        zuuluu = zuuluu.bind(tangon)();
                        if(!zuuluu) { _fun00008_ip = 146; continue _fun00007 }
 121:
                        michal = _closure2_slot3;
                        zuuluu = michal.current;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 146; continue _fun00007 }
 136:
                        michal = zuuluu.collapse;
                        michal = michal.bind(zuuluu)();
 146:
                        return entity;
                    }
                };
                entity['onViewAll'] = zuuluu;
                zuuluu = function(argFoo, argBar, argBaz, argCor) { // Original name: onSelectItem
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        oscard = argFoo;
                        report = argBar;
                        entity = _closure2_slot4;
                        tangon = entity.target;
                        zuuluu = _closure1_slot5;
                        zuuluu = zuuluu.CHAT;
                        if(!(tangon !== zuuluu)) { _fun00010_ip = 87; continue _fun00009 }
 36:
                        golfie = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 9;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        golfie = golfie.bind(zuuluu)(tangon);
                        tangon = golfie.handleSelectAppLauncherItem;
                        offset = _closure2_slot1;
                        option = _closure2_slot4;
                        romeon = golfie;
                        yankee = oscard;
                        verify = report;
                        michal = romeon[tangon](yankee, offset, verify, option, golfie);
                        _fun00010_ip = 134; continue _fun00009;
 87:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.handleSelectKeyboardItem;
                        verify = argBaz;
                        option = argCor;
                        romeon = tangon;
                        yankee = oscard;
                        offset = report;
                        entity = romeon[zuuluu](yankee, offset, verify, option, golfie);
 134:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onSelectItem'] = zuuluu;
                zuuluu = function() { // Original name: onPollsPress
                    entity = _closure2_slot1;
                    michal = entity.current;
                    entity = michal.closeCustomKeyboard;
                    entity = entity.bind(michal)();
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openCreatePollModal;
                    michal = {};
                    report = _closure2_slot0;
                    michal['channel'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['onPollsPress'] = zuuluu;
                michal = function() { // Original name: onSend
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = _closure2_slot3;
                        zuuluu = michal.current;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00012_ip = 28; continue _fun00011 }
 18:
                        michal = zuuluu.collapse;
                        michal = michal.bind(zuuluu)();
 28:
                        entity = _closure2_slot1;
                        michal = entity.current;
                        entity = michal.handleSend;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onSend'] = michal;
                return entity;
            };
            entity = oscard.bind(verify)(entity, zuuluu);
            zuuluu = entity.onAttachPress;
            var _closure2_slot6 = zuuluu;
            yankee = entity.onPressCamera;
            verify = entity.onViewAll;
            var _closure2_slot7 = verify;
            zuuluu = entity.onPollsPress;
            var _closure2_slot8 = zuuluu;
            offset = entity.onSelectItem;
            sizing = entity.onSend;
            entity = 15;
            entity = kiloes[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useCanPostPollsInChannel;
            entity = entity.bind(michal)(backup);
            var _closure2_slot9 = entity;
            oscard = _closure1_slot1;
            entity = 16;
            entity = kiloes[entity];
            entity = oscard.bind(tangon)(entity);
            foxtra = entity.bind(tangon)(backup);
            var _closure2_slot10 = foxtra;
            zuuluu = _closure1_slot9;
            entity = 17;
            entity = kiloes[entity];
            michal = oscard.bind(tangon)(entity);
            entity = {};
            echoed = _closure1_slot8;
            entity['animationConfigs'] = echoed;
            entity['channel'] = backup;
            entity['draftType'] = romeon;
            result = function(argFoo) { // Original name: handleComponent
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure1_slot9;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 18;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    offset = argFoo;
                    yankee = entity;
                    report = copyDataProperties(yankee, offset);
                    verify = _closure2_slot0;
                    option = 'channel';
                    entity[option] = verify;
                    option = _closure2_slot9;
                    verify = !option;
                    option = 'disablePolls';
                    entity[option] = verify;
                    verify = _closure2_slot10;
                    option = 'disableAttach';
                    entity[option] = verify;
                    verify = _closure2_slot5;
                    option = 'draftType';
                    entity[option] = verify;
                    verify = _closure2_slot6;
                    option = 'onAttachPress';
                    entity[option] = verify;
                    verify = _closure2_slot8;
                    option = 'onPollsPress';
                    entity[option] = verify;
                    verify = _closure2_slot7;
                    option = 'onViewAll';
                    entity[option] = verify;
                    verify = function() { // Original name: onBack
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure2_slot3;
                            zuuluu = entity.current;
                            entity = null;
                            michal = entity == zuuluu;
                            entity = undefined;
                            if(michal) { _fun00016_ip = 33; continue _fun00015 }
 23:
                            michal = zuuluu.collapse;
                            entity = michal.bind(zuuluu)();
 33:
                            return entity;
                        }
                    };
                    option = 'onBack';
                    entity[option] = verify;
                    option = function() { // Original name: onPress
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zuuluu = _closure2_slot2;
                            entity = zuuluu.get;
                            zuuluu = entity.bind(zuuluu)();
                            entity = 0;
                            if(!(entity !== zuuluu)) { _fun00018_ip = 54; continue _fun00017 }
 22:
                            entity = _closure2_slot3;
                            tangon = entity.current;
                            entity = null;
                            zuuluu = entity == tangon;
                            entity = undefined;
                            if(zuuluu) { _fun00018_ip = 52; continue _fun00017 }
 42:
                            zuuluu = tangon.collapse;
                            entity = zuuluu.bind(tangon)();
 52:
                            _fun00018_ip = 87; continue _fun00017;
 54:
                            michal = _closure2_slot3;
                            tangon = michal.current;
                            michal = null;
                            zuuluu = michal == tangon;
                            michal = undefined;
                            if(zuuluu) { _fun00018_ip = 84; continue _fun00017 }
 74:
                            zuuluu = tangon.expand;
                            michal = zuuluu.bind(tangon)();
 84:
                            entity = michal;
 87:
                            return entity;
                        }
                    };
                    golfie = 'onPress';
                    entity[golfie] = option;
                    golfie = _closure2_slot4;
                    option = golfie.target;
                    oscard = _closure1_slot5;
                    golfie = oscard.CHAT;
                    oscard = undefined;
                    if(!(option !== golfie)) { _fun00014_ip = 208; continue _fun00013 }
 198:
                    report = _closure2_slot4;
                    oscard = report.option;
 208:
                    report = 'singleItemConfig';
                    entity[report] = oscard;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            entity['handleComponent'] = result;
            entity['onClose'] = output;
            entity['onSend'] = sizing;
            entity['transitionState'] = report;
            report = 19;
            report = kiloes[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['channel'] = backup;
            report['disabled'] = foxtra;
            report['draftType'] = romeon;
            report['onPressCamera'] = yankee;
            report['onSelectItem'] = offset;
            report['onViewAll'] = verify;
            offset = option.target;
            golfie = _closure1_slot5;
            verify = golfie.CHAT;
            golfie = undefined;
            if(!(offset !== verify)) { _fun00002_ip = 502; continue _fun00001 }
 496:
            golfie = option.option;
 502:
            report['singleItemConfig'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_keyboard/native/components/MediaKeyboard.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();