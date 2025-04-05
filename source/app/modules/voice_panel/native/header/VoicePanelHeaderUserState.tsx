// app/modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    backup = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    michal = function(argFoo, argBar, argBaz) { // Original name: useVoicePanelHeaderUserStateIcons
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot8;
            tangon = undefined;
            oscard = zuuluu.bind(tangon)();
            report = new Array(0);
            zuuluu = _closure1_slot10;
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            foxtra = 7;
            golfie = golfie[foxtra];
            verify = option.bind(tangon)(golfie);
            golfie = null;
            golfie = golfie == michal;
            option = undefined;
            if(golfie) { _fun00008_ip = 60; continue _fun00007 }
 55:
            option = michal.type;
 60:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 8;
            golfie = yankee[golfie];
            offset = offset.bind(tangon)(golfie);
            golfie = offset.isStableParticipantWithUser;
            offset = golfie.bind(offset)(michal);
            golfie = undefined;
            if(!offset) { _fun00008_ip = 106; continue _fun00007 }
 96:
            michal = michal.user;
            golfie = michal.id;
 106:
            michal = argBar;
            michal = verify.bind(tangon)(option, golfie, michal);
            romeon = zuuluu.bind(tangon)(michal);
            zuuluu = romeon.bind(tangon)();
            michal = zuuluu.done;
            yankee = 9;
            offset = 'mute-deafen';
            verify = 4;
            option = 'dark';
            golfie = 'video';
            if(michal) { _fun00008_ip = 519; continue _fun00007 }
 156:
            update = zuuluu.value;
            backup = update.type;
            kiloes = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[foxtra];
            michal = kiloes.bind(tangon)(michal);
            michal = michal.VoicePanelCardUserStateIconType;
            michal = michal.USER_VIDEO_ICON;
            if(!(backup === michal)) { _fun00008_ip = 311; continue _fun00007 }
 199:
            backup = report.push;
            sizing = _closure1_slot5;
            result = _closure1_slot0;
            output = _closure1_slot2;
            michal = output[verify];
            michal = result.bind(tangon)(michal);
            kiloes = michal.BackgroundBlurView;
            michal = {};
            michal['blurTheme'] = option;
            echoed = oscard.floatingIconWrapper;
            michal['style'] = echoed;
            echoed = _closure1_slot5;
            output = output[yankee];
            output = result.bind(tangon)(output);
            result = output.VideoIcon;
            output = {};
            source = oscard.floatingIcon;
            output['style'] = source;
            source = update.videoIconState;
            output['state'] = source;
            output = echoed.bind(tangon)(result, output);
            michal['children'] = output;
            michal = sizing.bind(tangon)(kiloes, michal, golfie);
            michal = backup.bind(report)(michal);
 311:
            backup = update.type;
            kiloes = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[foxtra];
            michal = kiloes.bind(tangon)(michal);
            michal = michal.VoicePanelCardUserStateIconType;
            michal = michal.MUTE_DEAFEN_ICON;
            if(!(backup === michal)) { _fun00008_ip = 501; continue _fun00007 }
 352:
            backup = report.push;
            sizing = _closure1_slot5;
            kiloes = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[verify];
            michal = kiloes.bind(tangon)(michal);
            kiloes = michal.BackgroundBlurView;
            michal = {};
            michal['blurTheme'] = option;
            result = oscard.floatingIconWrapper;
            output = new Array(2);
            output[0] = result;
            echoed = update.withLeftMargin;
            result = undefined;
            if(!echoed) { _fun00008_ip = 422; continue _fun00007 }
 416:
            result = oscard.leftMargin;
 422:
            output[1] = result;
            michal['style'] = output;
            echoed = _closure1_slot5;
            result = _closure1_slot0;
            output = _closure1_slot2;
            output = output[yankee];
            output = result.bind(tangon)(output);
            result = output.MuteDeafenIcon;
            output = {};
            source = oscard.floatingIcon;
            output['style'] = source;
            update = update.muteDeafenIconState;
            output['state'] = update;
            output = echoed.bind(tangon)(result, output);
            michal['children'] = output;
            michal = sizing.bind(tangon)(kiloes, michal, offset);
            michal = backup.bind(report)(michal);
 501:
            backup = romeon.bind(tangon)();
            michal = backup.done;
            zuuluu = backup;
            if(!michal) { _fun00008_ip = 156; continue _fun00007 }
 519:
            zuuluu = report.length;
            michal = 0;
            if(!(michal === zuuluu)) { _fun00008_ip = 532; continue _fun00007 }
 530:
            return tangon;
 532:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            golfie = oscard.iconContainer;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = argBaz;
            oscard[1] = golfie;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    option = report.bind(entity)(option);
    var _closure1_slot3 = option;
    report = 1;
    report = golfie[report];
    report = backup.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    offset = backup.bind(entity)(report);
    verify = offset.createAnimatedComponent;
    romeon = 4;
    report = golfie[romeon];
    report = oscard.bind(entity)(report);
    report = report.BackgroundBlurView;
    report = verify.bind(offset)(report);
    var _closure1_slot6 = report;
    report = {};
    verify = 100;
    report['duration'] = verify;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {'position': 'absolute', 'top': 0, 'left': 0, 'borderRadius': null, 'padding': 6};
    foxtra = 6;
    kiloes = golfie[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.round;
    yankee['borderRadius'] = kiloes;
    report['container'] = yankee;
    yankee = {};
    kiloes = 'row';
    yankee['flexDirection'] = kiloes;
    report['iconContainer'] = yankee;
    yankee = {'width': 20, 'height': 20, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    kiloes = golfie[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.round;
    yankee['borderRadius'] = kiloes;
    report['floatingIconWrapper'] = yankee;
    yankee = {'width': 12, 'height': 12};
    foxtra = golfie[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.WHITE;
    yankee['tintColor'] = foxtra;
    report['floatingIcon'] = yankee;
    yankee = {};
    yankee['marginLeft'] = romeon;
    report['leftMargin'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot8 = report;
    report = {};
    verify = 'function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}';
    report['code'] = verify;
    var _closure1_slot9 = report;
    report = option.memo;
    tangon = function(argFoo) { // Original name: VoicePanelHeaderUserState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            verify = michal.isHeaderHidden;
            var _closure2_slot0 = verify;
            oscard = _closure1_slot3;
            tangon = oscard.useContext;
            foxtra = _closure1_slot1;
            romeon = _closure1_slot2;
            zuuluu = 11;
            zuuluu = romeon[zuuluu];
            report = undefined;
            zuuluu = foxtra.bind(report)(zuuluu);
            zuuluu = tangon.bind(oscard)(zuuluu);
            offset = zuuluu.channelId;
            var _closure2_slot1 = offset;
            oscard = zuuluu.guildId;
            zuuluu = _closure1_slot8;
            golfie = zuuluu.bind(report)();
            yankee = _closure1_slot0;
            zuuluu = 12;
            zuuluu = romeon[zuuluu];
            backup = yankee.bind(report)(zuuluu);
            option = backup.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getSelectedParticipant;
                    entity = _closure2_slot1;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00012_ip = 41; continue _fun00011 }
 36:
                    entity = michal.id;
 41:
                    return entity;
                }
            };
            option = option.bind(backup)(tangon, zuuluu);
            tangon = _closure1_slot12;
            zuuluu = 8;
            zuuluu = romeon[zuuluu];
            zuuluu = foxtra.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)(option, offset, oscard);
            oscard = tangon.bind(report)(zuuluu, oscard);
            zuuluu = 3;
            zuuluu = romeon[zuuluu];
            tangon = yankee.bind(report)(zuuluu);
            zuuluu = tangon.useAnimatedStyle;
            entity = function() { // Original name: s
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 13;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.withTiming;
                    oscard = _closure2_slot0;
                    zuuluu = oscard.get;
                    oscard = zuuluu.bind(oscard)();
                    zuuluu = 0;
                    if(!oscard) { _fun00014_ip = 56; continue _fun00013 }
 53:
                    zuuluu = 1;
 56:
                    michal = _closure1_slot7;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            option = {};
            offset = 13;
            offset = romeon[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.withTiming;
            option['withTiming'] = offset;
            option['isHeaderHidden'] = verify;
            verify = _closure1_slot7;
            option['OPACITY_TIMING'] = verify;
            entity['__closure'] = option;
            option = 7032221979181.0;
            entity['__workletHash'] = option;
            option = _closure1_slot9;
            entity['__initData'] = option;
            option = zuuluu.bind(tangon)(entity);
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00010_ip = 315; continue _fun00009 }
 260:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot6;
            michal = {'blurTheme': 'dark', 'style': null, 'pointerEvents': 'none'};
            verify = golfie.container;
            golfie = new Array(2);
            golfie[0] = verify;
            golfie[1] = option;
            michal['style'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 315:
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 14;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['useVoicePanelHeaderUserStateIcons'] = michal;
    return entity;
})();