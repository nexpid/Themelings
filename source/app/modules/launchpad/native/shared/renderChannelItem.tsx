// app/modules/launchpad/native/shared/renderChannelItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: LaunchpadChannelIcon
        michal = argFoo;
        verify = michal.channel;
        var _closure2_slot0 = verify;
        michal = _closure1_slot9;
        tangon = undefined;
        romeon = michal.bind(tangon)();
        foxtra = _closure1_slot1;
        offset = _closure1_slot2;
        michal = 8;
        michal = offset[michal];
        michal = foxtra.bind(tangon)(michal);
        kiloes = michal.bind(tangon)();
        golfie = _closure1_slot0;
        michal = 9;
        michal = offset[michal];
        report = golfie.bind(tangon)(michal);
        zuuluu = report.useStateFromStores;
        option = _closure1_slot4;
        michal = new Array(1);
        michal[0] = option;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getGuild;
            entity = _closure2_slot0;
            entity = entity.guild_id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        sizing = zuuluu.bind(report)(michal, entity);
        zuuluu = _closure1_slot8;
        michal = _closure1_slot7;
        entity = {};
        yankee = _closure1_slot6;
        option = _closure1_slot3;
        report = {};
        romeon = romeon.guildBadgeIcon;
        report['style'] = romeon;
        backup = _closure1_slot6;
        romeon = 10;
        romeon = offset[romeon];
        foxtra = foxtra.bind(tangon)(romeon);
        romeon = {};
        romeon['guild'] = sizing;
        kiloes = kiloes.icon;
        kiloes = kiloes.guildBadgeIconSize;
        romeon['size'] = kiloes;
        romeon = backup.bind(tangon)(foxtra, romeon);
        report['children'] = romeon;
        option = yankee.bind(tangon)(option, report);
        report = new Array(2);
        report[0] = option;
        option = _closure1_slot6;
        oscard = 11;
        oscard = offset[oscard];
        oscard = golfie.bind(tangon)(oscard);
        golfie = oscard.ChannelIcon;
        oscard = {'channel': null, 'size': 'sm', 'wrapperSize': 32};
        oscard['channel'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot5 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot7 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function() {
        entity = {};
        michal = {'position': 'absolute', 'zIndex': 1, 'bottom': 4294967292, 'right': 4294967292, 'borderColor': null, 'borderWidth': 2, 'borderRadius': 6};
        report = _closure1_slot1;
        tangon = _closure1_slot2;
        zuuluu = 7;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        zuuluu = report.bind(zuuluu)(tangon);
        zuuluu = zuuluu.colors;
        zuuluu = zuuluu.BG_BASE_PRIMARY;
        michal['borderColor'] = zuuluu;
        entity['guildBadgeIcon'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/shared/renderChannelItem.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: renderChannelItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.channel;
            ctrled = entity.channelCategoryName;
            cntext = entity.subtitle;
            yankee = entity.unreadBadge;
            output = entity.mentionBadge;
            source = entity.locked;
            tangon = undefined;
            if(!(source === tangon)) { _fun00002_ip = 46; continue _fun00001 }
 44:
            source = false;
 46:
            record = entity.unread;
            if(!(record === tangon)) { _fun00002_ip = 58; continue _fun00001 }
 56:
            record = false;
 58:
            config = entity.resolvedUnreadSetting;
            if(!(config === tangon)) { _fun00002_ip = 81; continue _fun00001 }
 68:
            michal = _closure1_slot5;
            config = michal.ONLY_MENTIONS;
 81:
            echoed = entity.live;
            if(!(echoed === tangon)) { _fun00002_ip = 93; continue _fun00001 }
 91:
            echoed = false;
 93:
            sequen = entity.muted;
            if(!(sequen === tangon)) { _fun00002_ip = 105; continue _fun00001 }
 103:
            sequen = false;
 105:
            zuuluu = entity.latestMessageTimestamp;
            foxtra = entity.end;
            update = entity.connected;
            result = entity.mentionCount;
            papara = entity.channelName;
            report = entity.fontScale;
            sizing = entity.isSubscriptionGated;
            if(!(sizing === tangon)) { _fun00002_ip = 152; continue _fun00001 }
 150:
            sizing = false;
 152:
            backup = entity.needSubscriptionToAccess;
            if(!(backup === tangon)) { _fun00002_ip = 164; continue _fun00001 }
 162:
            backup = false;
 164:
            verify = null;
            entity = verify == zuuluu;
            vacuum = null;
            if(entity) { _fun00002_ip = 214; continue _fun00001 }
 175:
            vacuum = null;
            if(sequen) { _fun00002_ip = 214; continue _fun00001 }
 180:
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 12;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.getRelativeTimestamp;
            vacuum = entity.bind(michal)(zuuluu);
 214:
            limora = _closure1_slot1;
            whisks = _closure1_slot2;
            kiloes = 8;
            entity = whisks[kiloes];
            entity = limora.bind(tangon)(entity);
            equals = entity.bind(tangon)();
            entity = 13;
            entity = whisks[entity];
            zuuluu = limora.bind(tangon)(entity);
            golfie = _closure1_slot8;
            michal = _closure1_slot7;
            entity = {};
            option = new Array(4);
            option[0] = yankee;
            target = _closure1_slot6;
            romeon = _closure1_slot3;
            yankee = {};
            status = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            sierra = 7;
            sierra = whisks[sierra];
            sierra = limora.bind(tangon)(sierra);
            sierra = sierra.radii;
            sierra = sierra.round;
            status['borderRadius'] = sierra;
            sierra = equals.icon;
            sierra = sierra.wrapper;
            sierra = sierra.size;
            status['width'] = sierra;
            sierra = equals.icon;
            sierra = sierra.wrapper;
            sierra = sierra.size;
            status['height'] = sierra;
            sierra = equals.icon;
            variable36 = sierra.margin;
            variable37 = status;
            sierra = copyDataProperties(variable37, variable36);
            yankee['style'] = status;
            status = oscard.isGroupDM;
            status = status.bind(oscard)();
            whisks = _closure1_slot6;
            if(status) { _fun00002_ip = 420; continue _fun00001 }
 402:
            sierra = _closure1_slot10;
            status = {};
            status['channel'] = oscard;
            status = whisks.bind(tangon)(sierra, status);
            _fun00002_ip = 467; continue _fun00001;
 420:
            limora = _closure1_slot1;
            quebec = _closure1_slot2;
            sierra = 14;
            sierra = quebec[sierra];
            limora = limora.bind(tangon)(sierra);
            sierra = {};
            sierra['channel'] = oscard;
            equals = equals.icon;
            equals = equals.avatarSize;
            sierra['size'] = equals;
            status = whisks.bind(tangon)(limora, sierra);
 467:
            yankee['children'] = status;
            yankee = target.bind(tangon)(romeon, yankee);
            option[1] = yankee;
            romeon = _closure1_slot1;
            target = _closure1_slot2;
            yankee = 15;
            yankee = target[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = {};
            if(!(verify == papara)) { _fun00002_ip = 512; continue _fun00001 }
 507:
            papara = oscard.name;
 512:
            yankee['name'] = papara;
            yankee['subtitle'] = cntext;
            yankee['unread'] = record;
            yankee['resolvedUnreadSetting'] = config;
            yankee['muted'] = sequen;
            yankee['lastMessageTimestampString'] = vacuum;
            yankee['channel'] = oscard;
            yankee['channelCategoryName'] = ctrled;
            yankee['locked'] = source;
            yankee['connected'] = update;
            yankee['live'] = echoed;
            yankee['mentionCount'] = result;
            yankee['mentionBadge'] = output;
            yankee['isSubscriptionGated'] = sizing;
            yankee['needSubscriptionToAccess'] = backup;
            yankee = romeon.bind(tangon)(yankee);
            option[2] = yankee;
            yankee = verify != foxtra;
            verify = null;
            if(!yankee) { _fun00002_ip = 634; continue _fun00001 }
 603:
            romeon = _closure1_slot6;
            yankee = _closure1_slot3;
            offset = {};
            backup = {};
            backup['paddingLeft'] = kiloes;
            offset['style'] = backup;
            offset['children'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 634:
            option[3] = verify;
            entity['children'] = option;
            michal = golfie.bind(tangon)(michal, entity);
            entity = {};
            entity['channel'] = oscard;
            entity['fontScale'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getChannelAccessibilityProps
        entity = argFoo;
        verify = entity.channel;
        option = entity.unread;
        golfie = entity.mentionCount;
        oscard = entity.userCount;
        report = entity.embeddedActivitiesCount;
        entity = {'accessible': true, 'accessibilityRole': 'button'};
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 5;
        michal = tangon[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = {};
        michal['channel'] = verify;
        michal['unread'] = option;
        michal['mentionCount'] = golfie;
        michal['userCount'] = oscard;
        michal['embeddedActivitiesCount'] = report;
        michal = zuuluu.bind(tangon)(michal);
        entity['accessibilityLabel'] = michal;
        return entity;
    };
    zuuluu['getChannelAccessibilityProps'] = michal;
    return entity;
})();