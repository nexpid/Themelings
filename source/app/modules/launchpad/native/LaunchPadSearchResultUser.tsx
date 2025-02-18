// app/modules/launchpad/native/LaunchPadSearchResultUser.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: UserResult
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            cntext = michal.user;
            var _closure2_slot0 = cntext;
            update = michal.comparator;
            record = michal.channel;
            config = michal.lastMessage;
            echoed = michal.unread;
            zuuluu = undefined;
            if(!(echoed === zuuluu)) { _fun00002_ip = 47; continue _fun00001 }
 45:
            echoed = false;
 47:
            output = michal.mentionCount;
            if(!(output === zuuluu)) { _fun00002_ip = 59; continue _fun00001 }
 57:
            output = 0;
 59:
            result = michal.muted;
            if(!(result === zuuluu)) { _fun00002_ip = 71; continue _fun00001 }
 69:
            result = false;
 71:
            vacuum = michal.isTyping;
            if(!(vacuum === zuuluu)) { _fun00002_ip = 83; continue _fun00001 }
 81:
            vacuum = false;
 83:
            michal = _closure1_slot15;
            oscard = michal.bind(zuuluu)();
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 12;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            target = michal.bind(zuuluu)();
            option = _closure1_slot3;
            golfie = option.useCallback;
            michal = cntext.id;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openPrivateChannel;
                michal = _closure2_slot0;
                report = michal.id;
                michal = new Array(1);
                michal[0] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie = golfie.bind(option)(michal, tangon);
            tangon = _closure1_slot0;
            michal = 14;
            michal = report[michal];
            option = tangon.bind(zuuluu)(michal);
            michal = option.useFontScale;
            verify = michal.bind(option)();
            michal = 15;
            option = report[michal];
            romeon = tangon.bind(zuuluu)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot5;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                entity = _closure1_slot5;
                entity = entity.locale;
                return entity;
            };
            sizing = yankee.bind(romeon)(offset, option);
            option = report[michal];
            romeon = tangon.bind(zuuluu)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot4;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            papara = yankee.bind(romeon)(offset, option);
            michal = report[michal];
            report = tangon.bind(zuuluu)(michal);
            tangon = report.useStateFromStoresObject;
            option = _closure1_slot7;
            michal = new Array(1);
            michal[0] = option;
            entity = function() {
                entity = {};
                oscard = _closure1_slot7;
                report = oscard.isMobileOnline;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['isMobileOnline'] = tangon;
                oscard = _closure1_slot7;
                report = oscard.getStatus;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['status'] = tangon;
                tangon = _closure1_slot7;
                zuuluu = tangon.getActivities;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['activities'] = michal;
                return entity;
            };
            entity = tangon.bind(report)(michal, entity);
            status = entity.isMobileOnline;
            limora = entity.status;
            sierra = entity.activities;
            source = null;
            entity = source != config;
            tangon = undefined;
            if(!entity) { _fun00002_ip = 364; continue _fun00001 }
 328:
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            report = michal.bind(zuuluu)(entity);
            michal = report.extractTimestamp;
            entity = config.id;
            tangon = michal.bind(report)(entity);
 364:
            entity = source != tangon;
            kiloes = null;
            if(!entity) { _fun00002_ip = 404; continue _fun00001 }
 373:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            entity = report[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.getRelativeTimestamp;
            kiloes = entity.bind(michal)(tangon);
 404:
            entity = 'text-muted';
            sequen = entity;
            if(!echoed) { _fun00002_ip = 428; continue _fun00001 }
 416:
            sequen = entity;
            if(result) { _fun00002_ip = 428; continue _fun00001 }
 422:
            sequen = 'text-normal';
 428:
            foxtra = _closure1_slot1;
            whisks = _closure1_slot2;
            entity = 18;
            entity = whisks[entity];
            michal = foxtra.bind(zuuluu)(entity);
            report = _closure1_slot12;
            tangon = _closure1_slot0;
            entity = 19;
            entity = whisks[entity];
            entity = tangon.bind(zuuluu)(entity);
            tangon = entity.PressableHighlight;
            entity = {};
            entity['onPress'] = golfie;
            golfie = oscard.pressableUnderlayColor;
            golfie = golfie.backgroundColor;
            entity['underlayColor'] = golfie;
            golfie = oscard.pressable;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = {};
            option = target.container;
            option = option.borderRadius;
            golfie['borderRadius'] = option;
            oscard[1] = golfie;
            entity['style'] = oscard;
            oscard = 20;
            oscard = whisks[oscard];
            option = foxtra.bind(zuuluu)(oscard);
            offset = _closure1_slot14;
            golfie = _closure1_slot13;
            oscard = {};
            ctrled = _closure1_slot12;
            yankee = 21;
            yankee = whisks[yankee];
            romeon = foxtra.bind(zuuluu)(yankee);
            yankee = {};
            yankee['unread'] = echoed;
            equals = _closure1_slot11;
            equals = equals.ALL_MESSAGES;
            yankee['resolvedUnreadSetting'] = equals;
            romeon = ctrled.bind(zuuluu)(romeon, yankee);
            yankee = new Array(3);
            yankee[0] = romeon;
            ctrled = _closure1_slot12;
            romeon = 22;
            romeon = whisks[romeon];
            foxtra = foxtra.bind(zuuluu)(romeon);
            romeon = {};
            romeon['user'] = cntext;
            romeon['guildId'] = zuuluu;
            romeon['isMobileOnline'] = status;
            status = cntext.isSystemUser;
            whisks = status.bind(cntext)();
            status = null;
            if(whisks) { _fun00002_ip = 673; continue _fun00001 }
 654:
            whisks = _closure1_slot10;
            whisks = whisks.OFFLINE;
            status = null;
            if(!(limora !== whisks)) { _fun00002_ip = 673; continue _fun00001 }
 670:
            status = limora;
 673:
            romeon['status'] = status;
            limora = _closure1_slot1;
            whisks = _closure1_slot2;
            status = 23;
            status = whisks[status];
            status = limora.bind(zuuluu)(status);
            status = status.bind(zuuluu)(sierra);
            romeon['streaming'] = status;
            status = target.icon;
            status = status.margin;
            romeon['style'] = status;
            target = target.icon;
            target = target.avatarSize;
            romeon['size'] = target;
            papara = !papara;
            if(!papara) { _fun00002_ip = 755; continue _fun00001 }
 743:
            target = vacuum;
            if(target) { _fun00002_ip = 752; continue _fun00001 }
 749:
            target = echoed;
 752:
            papara = target;
 755:
            romeon['animate'] = papara;
            romeon['typing'] = vacuum;
            vacuum = true;
            romeon['autoStatusCutout'] = vacuum;
            romeon = ctrled.bind(zuuluu)(foxtra, romeon);
            yankee[1] = romeon;
            foxtra = _closure1_slot1;
            ctrled = _closure1_slot2;
            romeon = 24;
            romeon = ctrled[romeon];
            foxtra = foxtra.bind(zuuluu)(romeon);
            romeon = {};
            if(!(source == update)) { _fun00002_ip = 839; continue _fun00001 }
 808:
            vacuum = _closure1_slot1;
            papara = _closure1_slot2;
            ctrled = 25;
            ctrled = papara[ctrled];
            vacuum = vacuum.bind(zuuluu)(ctrled);
            ctrled = vacuum.getUserTag;
            update = ctrled.bind(vacuum)(cntext);
 839:
            romeon['name'] = update;
            ctrled = source != config;
            update = undefined;
            if(!ctrled) { _fun00002_ip = 916; continue _fun00001 }
 852:
            source = source != record;
            update = undefined;
            if(!source) { _fun00002_ip = 916; continue _fun00001 }
 861:
            vacuum = _closure1_slot12;
            ctrled = _closure1_slot0;
            cntext = _closure1_slot2;
            source = 26;
            source = cntext[source];
            source = ctrled.bind(zuuluu)(source);
            ctrled = source.PrivateChannelRowPreview;
            source = {};
            source['channel'] = record;
            source['message'] = config;
            source['color'] = sequen;
            source['muted'] = result;
            update = vacuum.bind(zuuluu)(ctrled, source);
 916:
            romeon['subtitle'] = update;
            romeon['unread'] = echoed;
            echoed = _closure1_slot11;
            echoed = echoed.ALL_MESSAGES;
            romeon['resolvedUnreadSetting'] = echoed;
            romeon['muted'] = result;
            romeon['lastMessageTimestampString'] = kiloes;
            romeon['mentionCount'] = output;
            kiloes = _closure1_slot1;
            result = _closure1_slot2;
            backup = 27;
            backup = result[backup];
            kiloes = kiloes.bind(zuuluu)(backup);
            backup = {};
            backup['mentionCount'] = output;
            backup['locale'] = sizing;
            backup = kiloes.bind(zuuluu)(backup);
            romeon['mentionBadge'] = backup;
            romeon = foxtra.bind(zuuluu)(romeon);
            yankee[2] = romeon;
            oscard['children'] = yankee;
            golfie = offset.bind(zuuluu)(golfie, oscard);
            oscard = {};
            oscard['fontScale'] = verify;
            oscard = option.bind(zuuluu)(golfie, oscard);
            entity['children'] = oscard;
            entity = report.bind(zuuluu)(tangon, entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: UserResultWithChannel
        report = argFoo;
        entity = report.user;
        var _closure2_slot0 = entity;
        yankee = report.channel;
        var _closure2_slot1 = yankee;
        oscard = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 15;
        golfie = offset[zuuluu];
        tangon = undefined;
        romeon = oscard.bind(tangon)(golfie);
        verify = romeon.useStateFromStores;
        golfie = _closure1_slot9;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            tangon = _closure1_slot9;
            zuuluu = tangon.isChannelMuted;
            entity = _closure2_slot1;
            michal = entity.id;
            entity = undefined;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        golfie = verify.bind(romeon)(option, golfie);
        option = 28;
        option = offset[option];
        verify = oscard.bind(tangon)(option);
        option = verify.useBaseChannelUnreadBadgeState;
        option = option.bind(verify)(yankee, golfie);
        verify = option.unread;
        option = option.mentionCount;
        zuuluu = offset[zuuluu];
        romeon = oscard.bind(tangon)(zuuluu);
        oscard = romeon.useStateFromStores;
        foxtra = _closure1_slot8;
        zuuluu = new Array(1);
        zuuluu[0] = foxtra;
        michal = function() {
            tangon = _closure1_slot8;
            zuuluu = tangon.isTyping;
            michal = _closure2_slot1;
            michal = michal.id;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard = oscard.bind(romeon)(zuuluu, michal);
        zuuluu = _closure1_slot1;
        michal = 29;
        michal = offset[michal];
        michal = zuuluu.bind(tangon)(michal);
        offset = michal.bind(tangon)(yankee, verify);
        zuuluu = _closure1_slot12;
        michal = _closure1_slot16;
        entity = {};
        kiloes = entity;
        backup = report;
        report = copyDataProperties(kiloes, backup);
        report = 'channel';
        entity[report] = yankee;
        report = 'lastMessage';
        entity[report] = offset;
        report = 'unread';
        entity[report] = verify;
        report = 'mentionCount';
        entity[report] = option;
        report = 'muted';
        entity[report] = golfie;
        report = 'isTyping';
        entity[report] = oscard;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
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
    yankee = 1;
    tangon = oscard[yankee];
    tangon = romeon.bind(entity)(tangon);
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
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusTypes;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot11 = tangon;
    tangon = 9;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot12 = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.Fragment;
    var _closure1_slot13 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['flex'] = yankee;
    tangon['pressable'] = offset;
    offset = {};
    yankee = 11;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACTIVE;
    offset['backgroundColor'] = yankee;
    tangon['pressableUnderlayColor'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot15 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            michal = oscard.user;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 15;
            option = golfie[zuuluu];
            report = undefined;
            romeon = tangon.bind(report)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot6;
            offset = new Array(1);
            offset[0] = option;
            verify = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getDMFromUserId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = yankee.bind(romeon)(offset, verify);
            var _closure2_slot1 = verify;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useStateFromStores;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = tangon.bind(golfie)(zuuluu, entity);
            entity = null;
            if(!(entity == golfie)) { _fun00004_ip = 142; continue _fun00003 }
 114:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot16;
            entity = {};
            backup = entity;
            foxtra = oscard;
            option = copyDataProperties(backup, foxtra);
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 177; continue _fun00003;
 142:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot17;
            michal = {};
            backup = michal;
            foxtra = oscard;
            oscard = copyDataProperties(backup, foxtra);
            oscard = 'channel';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 177:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/LaunchPadSearchResultUser.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();