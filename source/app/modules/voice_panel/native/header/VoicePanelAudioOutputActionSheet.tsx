// app/modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: closeActionSheet
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 11;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.hideActionSheet;
        michal = _closure1_slot9;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: VoicePanelAudioPhoneOutputSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot13;
            report = undefined;
            option = entity.bind(report)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useStateFromStoresObject;
            entity = _closure1_slot6;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                tangon = _closure1_slot6;
                zuuluu = tangon.getActiveAudioDevice;
                zuuluu = zuuluu.bind(tangon)();
                entity['activeDevice'] = zuuluu;
                zuuluu = _closure1_slot6;
                michal = zuuluu.getAudioDevices;
                michal = michal.bind(zuuluu)();
                entity['availableDevices'] = michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            offset = entity.activeDevice;
            yankee = entity.availableDevices;
            var _closure2_slot0 = yankee;
            tangon = _closure1_slot3;
            zuuluu = tangon.useCallback;
            michal = function(argFoo) {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.setAudioOutputDevice;
                zuuluu = argFoo;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure1_slot14;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            var _closure2_slot1 = entity;
            michal = yankee.length;
            entity = 0;
            michal = michal > entity;
            entity = null;
            if(!michal) { _fun00002_ip = 302; continue _fun00001 }
 127:
            tangon = _closure1_slot11;
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 14;
            michal = romeon[michal];
            michal = golfie.bind(report)(michal);
            zuuluu = michal.VoicePanelFormSection;
            michal = {};
            option = option.sectionContainer;
            michal['style'] = option;
            option = 15;
            foxtra = romeon[option];
            foxtra = golfie.bind(report)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            option = romeon[option];
            option = golfie.bind(report)(option);
            option = option.t;
            option = option.CxyS19;
            option = foxtra.bind(backup)(option);
            michal['title'] = option;
            option = _closure1_slot11;
            oscard = 16;
            oscard = romeon[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.TableRadioGroup;
            oscard = {};
            offset = offset.deviceId;
            oscard['defaultValue'] = offset;
            offset = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot0;
                    zuuluu = tangon.find;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.deviceId;
                        entity = _closure3_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 48; continue _fun00003 }
 37:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            oscard['onChange'] = offset;
            offset = yankee.map;
            verify = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot11;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 17;
                    michal = option[michal];
                    tangon = undefined;
                    michal = golfie.bind(tangon)(michal);
                    zuuluu = michal.TableRadioRow;
                    michal = {};
                    verify = entity.deviceId;
                    michal['value'] = verify;
                    yankee = _closure1_slot11;
                    oscard = 18;
                    oscard = option[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    offset = oscard.TableRowIcon;
                    verify = {};
                    oscard = 19;
                    romeon = option[oscard];
                    romeon = golfie.bind(tangon)(romeon);
                    foxtra = romeon.audioDeviceToIconMap;
                    romeon = entity.simpleDeviceType;
                    romeon = foxtra[romeon];
                    verify['source'] = romeon;
                    verify = yankee.bind(tangon)(offset, verify);
                    michal['icon'] = verify;
                    oscard = option[oscard];
                    golfie = golfie.bind(tangon)(oscard);
                    oscard = golfie.getAudioDeviceToDisplayText;
                    oscard = oscard.bind(golfie)(entity);
                    michal['label'] = oscard;
                    oscard = entity.deviceName;
                    golfie = null;
                    option = golfie == oscard;
                    golfie = undefined;
                    if(option) { _fun00006_ip = 162; continue _fun00005 }
 157:
                    golfie = oscard.length;
 162:
                    oscard = 0;
                    golfie = golfie > oscard;
                    oscard = undefined;
                    if(!golfie) { _fun00006_ip = 179; continue _fun00005 }
 173:
                    oscard = entity.deviceName;
 179:
                    michal['subLabel'] = oscard;
                    entity = entity.deviceId;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 302:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: VoicePanelAudioConsoleSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            var _closure2_slot0 = entity;
            michal = _closure1_slot13;
            report = undefined;
            option = michal.bind(report)();
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 20;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            yankee = michal.bind(report)();
            var _closure2_slot1 = yankee;
            michal = 21;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.bind(report)();
            var _closure2_slot2 = michal;
            tangon = _closure1_slot0;
            michal = 12;
            zuuluu = golfie[michal];
            foxtra = tangon.bind(report)(zuuluu);
            romeon = foxtra.useStateFromStores;
            zuuluu = _closure1_slot5;
            offset = new Array(1);
            offset[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot5;
                entity = michal.getAwaitingRemoteSessionInfo;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = romeon.bind(foxtra)(offset, zuuluu);
            var _closure2_slot3 = foxtra;
            michal = golfie[michal];
            romeon = tangon.bind(report)(michal);
            offset = romeon.useStateFromStores;
            michal = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getSessionById;
                    tangon = _closure2_slot2;
                    entity = null;
                    oscard = entity == tangon;
                    tangon = undefined;
                    if(oscard) { _fun00010_ip = 41; continue _fun00009 }
 31:
                    report = _closure2_slot2;
                    tangon = report.sessionId;
 41:
                    report = entity != tangon;
                    entity = '';
                    if(!report) { _fun00010_ip = 55; continue _fun00009 }
 52:
                    entity = tangon;
 55:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            michal = offset.bind(romeon)(zuuluu, michal);
            var _closure2_slot4 = michal;
            romeon = _closure1_slot3;
            offset = romeon.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = foxtra;
            zuuluu[1] = michal;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = null;
                    zuuluu = entity == michal;
                    michal = undefined;
                    if(zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 18:
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.type;
 27:
                    if(!(entity == michal)) { _fun00012_ip = 72; continue _fun00011 }
 31:
                    zuuluu = _closure2_slot4;
                    report = entity == zuuluu;
                    zuuluu = undefined;
                    if(report) { _fun00012_ip = 69; continue _fun00011 }
 44:
                    tangon = _closure2_slot4;
                    tangon = tangon.clientInfo;
                    report = entity == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00012_ip = 69; continue _fun00011 }
 63:
                    zuuluu = tangon.os;
 69:
                    michal = zuuluu;
 72:
                    zuuluu = entity != michal;
                    entity = '';
                    if(!zuuluu) { _fun00012_ip = 86; continue _fun00011 }
 83:
                    entity = michal;
 86:
                    return entity;
                }
            };
            romeon = offset.bind(romeon)(michal, zuuluu);
            offset = _closure1_slot3;
            zuuluu = offset.useCallback;
            michal = new Array(2);
            michal[0] = yankee;
            michal[1] = entity;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    tangon = _closure2_slot1;
                    michal = tangon.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        entity = _closure3_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = michal.bind(tangon)(entity);
                    entity = null;
                    if(!(entity == oscard)) { _fun00014_ip = 52; continue _fun00013 }
 37:
                    michal = _closure1_slot14;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    _fun00014_ip = 101; continue _fun00013;
 52:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 22;
                    tangon = tangon[michal];
                    michal = undefined;
                    report = report.bind(michal)(tangon);
                    tangon = report.onConnectToConsole;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
                    entity = _closure1_slot14;
                    entity = entity.bind(michal)();
 101:
                    entity = undefined;
                    return entity;
                }
            };
            offset = zuuluu.bind(offset)(entity, michal);
            entity = 23;
            entity = golfie[entity];
            zuuluu = tangon.bind(report)(entity);
            michal = zuuluu.useIsDismissibleContentDismissed;
            entity = 24;
            entity = golfie[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.DONUT_MOBILE_NUX;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            var _closure2_slot5 = entity;
            tangon = _closure1_slot3;
            zuuluu = tangon.useEffect;
            michal = new Array(2);
            michal[0] = yankee;
            michal[1] = entity;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00016_ip = 25; continue _fun00015 }
 10:
                    michal = _closure2_slot1;
                    zuuluu = michal.length;
                    michal = 0;
                    entity = zuuluu > michal;
 25:
                    if(!entity) { _fun00016_ip = 88; continue _fun00015 }
 28:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 23;
                    entity = oscard[entity];
                    tangon = undefined;
                    zuuluu = report.bind(tangon)(entity);
                    michal = zuuluu.markDismissibleContentAsDismissed;
                    entity = 24;
                    entity = oscard[entity];
                    entity = report.bind(tangon)(entity);
                    entity = entity.DismissibleContent;
                    entity = entity.DONUT_MOBILE_NUX;
                    entity = michal.bind(zuuluu)(entity);
 88:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            michal = yankee.length;
            entity = 0;
            michal = michal > entity;
            entity = null;
            if(!michal) { _fun00008_ip = 497; continue _fun00007 }
 333:
            tangon = _closure1_slot11;
            golfie = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 14;
            michal = foxtra[michal];
            michal = golfie.bind(report)(michal);
            zuuluu = michal.VoicePanelFormSection;
            michal = {};
            backup = 15;
            kiloes = foxtra[backup];
            kiloes = golfie.bind(report)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = foxtra[backup];
            backup = golfie.bind(report)(backup);
            backup = backup.t;
            backup = backup.q22XnZ;
            backup = kiloes.bind(sizing)(backup);
            michal['title'] = backup;
            option = option.sectionContainer;
            michal['style'] = option;
            option = _closure1_slot11;
            oscard = 16;
            oscard = foxtra[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.TableRadioGroup;
            oscard = {};
            oscard['defaultValue'] = romeon;
            oscard['onChange'] = offset;
            offset = yankee.map;
            verify = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = _closure1_slot10;
                    entity = entity.XBOX;
                    if(!(entity !== zuuluu)) { _fun00018_ip = 120; continue _fun00017 }
 25:
                    entity = _closure1_slot10;
                    entity = entity.PLAYSTATION;
                    golfie = null;
                    if(!(entity === zuuluu)) { _fun00018_ip = 194; continue _fun00017 }
 44:
                    entity = {};
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 15;
                    tangon = verify[zuuluu];
                    oscard = undefined;
                    tangon = option.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.fFl4jo;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity['label'] = zuuluu;
                    zuuluu = 'playstation';
                    entity['variant'] = zuuluu;
                    golfie = entity;
                    _fun00018_ip = 194; continue _fun00017;
 120:
                    entity = {};
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 15;
                    tangon = verify[zuuluu];
                    oscard = undefined;
                    tangon = option.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.Nfvo7+;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity['label'] = zuuluu;
                    zuuluu = 'xbox';
                    entity['variant'] = zuuluu;
                    golfie = entity;
 194:
                    entity = null;
                    entity = entity != golfie;
                    if(!entity) { _fun00018_ip = 343; continue _fun00017 }
 206:
                    oscard = _closure1_slot11;
                    verify = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    zuuluu = 17;
                    zuuluu = foxtra[zuuluu];
                    report = undefined;
                    zuuluu = verify.bind(report)(zuuluu);
                    tangon = zuuluu.TableRadioRow;
                    zuuluu = {};
                    offset = _closure1_slot11;
                    option = 18;
                    option = foxtra[option];
                    option = verify.bind(report)(option);
                    verify = option.TableRowIcon;
                    option = {};
                    romeon = _closure1_slot1;
                    yankee = 25;
                    yankee = foxtra[yankee];
                    romeon = romeon.bind(report)(yankee);
                    yankee = michal.type;
                    yankee = romeon.bind(report)(yankee);
                    option['source'] = yankee;
                    yankee = golfie.variant;
                    option['variant'] = yankee;
                    option = offset.bind(report)(verify, option);
                    zuuluu['icon'] = option;
                    golfie = golfie.label;
                    zuuluu['label'] = golfie;
                    golfie = michal.type;
                    zuuluu['value'] = golfie;
                    michal = michal.type;
                    entity = oscard.bind(report)(tangon, zuuluu, michal);
 343:
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 497:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ScrollView;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot11 = option;
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'marginTop': 0, 'marginBottom': 24};
    tangon['sectionContainer'] = offset;
    offset = {'padding': 6, 'width': 32, 'height': 32, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    yankee = 10;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.round;
    offset['borderRadius'] = yankee;
    tangon['deviceIcon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: VoicePanelAudioOutputActionSheet
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channelId;
            var _closure2_slot0 = zuuluu;
            backup = michal.isConnectedToVoiceChannel;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useStateFromStores;
            oscard = _closure1_slot7;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = zuuluu.bind(tangon)(michal, entity);
            entity = null;
            michal = entity == sizing;
            if(michal) { _fun00020_ip = 317; continue _fun00019 }
 85:
            tangon = _closure1_slot11;
            kiloes = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 26;
            michal = romeon[michal];
            michal = kiloes.bind(report)(michal);
            zuuluu = michal.BottomSheet;
            michal = {};
            option = _closure1_slot11;
            oscard = 27;
            oscard = romeon[oscard];
            oscard = kiloes.bind(report)(oscard);
            golfie = oscard.BottomSheetTitleHeader;
            oscard = {};
            verify = 15;
            offset = romeon[verify];
            offset = kiloes.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = romeon[verify];
            verify = kiloes.bind(report)(verify);
            verify = verify.t;
            verify = verify.iwxPMz;
            verify = offset.bind(yankee)(verify);
            oscard['title'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['header'] = oscard;
            option = _closure1_slot11;
            golfie = _closure1_slot4;
            oscard = {};
            yankee = _closure1_slot12;
            offset = _closure1_slot1;
            verify = 28;
            verify = romeon[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            if(!backup) { _fun00020_ip = 255; continue _fun00019 }
 239:
            output = _closure1_slot11;
            kiloes = _closure1_slot15;
            romeon = {};
            backup = output.bind(report)(kiloes, romeon);
 255:
            romeon = new Array(2);
            romeon[0] = backup;
            kiloes = _closure1_slot11;
            backup = _closure1_slot16;
            foxtra = {};
            foxtra['channel'] = sizing;
            foxtra = kiloes.bind(report)(backup, foxtra);
            romeon[1] = foxtra;
            verify['children'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 317:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();