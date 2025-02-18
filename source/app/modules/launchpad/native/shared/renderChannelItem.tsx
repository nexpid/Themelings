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
            record = entity.subtitle;
            yankee = entity.unreadBadge;
            output = entity.mentionBadge;
            source = entity.locked;
            tangon = undefined;
            if(!(source === tangon)) { _fun00002_ip = 40; continue _fun00001 }
 38:
            source = false;
 40:
            config = entity.unread;
            if(!(config === tangon)) { _fun00002_ip = 52; continue _fun00001 }
 50:
            config = false;
 52:
            sequen = entity.resolvedUnreadSetting;
            if(!(sequen === tangon)) { _fun00002_ip = 75; continue _fun00001 }
 62:
            michal = _closure1_slot5;
            sequen = michal.ONLY_MENTIONS;
 75:
            echoed = entity.live;
            if(!(echoed === tangon)) { _fun00002_ip = 87; continue _fun00001 }
 85:
            echoed = false;
 87:
            vacuum = entity.muted;
            if(!(vacuum === tangon)) { _fun00002_ip = 99; continue _fun00001 }
 97:
            vacuum = false;
 99:
            zuuluu = entity.latestMessageTimestamp;
            foxtra = entity.end;
            update = entity.connected;
            result = entity.mentionCount;
            cntext = entity.channelName;
            report = entity.fontScale;
            sizing = entity.isSubscriptionGated;
            if(!(sizing === tangon)) { _fun00002_ip = 146; continue _fun00001 }
 144:
            sizing = false;
 146:
            backup = entity.needSubscriptionToAccess;
            if(!(backup === tangon)) { _fun00002_ip = 158; continue _fun00001 }
 156:
            backup = false;
 158:
            verify = null;
            entity = verify == zuuluu;
            ctrled = null;
            if(entity) { _fun00002_ip = 208; continue _fun00001 }
 169:
            ctrled = null;
            if(vacuum) { _fun00002_ip = 208; continue _fun00001 }
 174:
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 12;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.getRelativeTimestamp;
            ctrled = entity.bind(michal)(zuuluu);
 208:
            sierra = _closure1_slot1;
            limora = _closure1_slot2;
            kiloes = 8;
            entity = limora[kiloes];
            entity = sierra.bind(tangon)(entity);
            whisks = entity.bind(tangon)();
            entity = 13;
            entity = limora[entity];
            zuuluu = sierra.bind(tangon)(entity);
            golfie = _closure1_slot8;
            michal = _closure1_slot7;
            entity = {};
            option = new Array(4);
            option[0] = yankee;
            papara = _closure1_slot6;
            romeon = _closure1_slot3;
            yankee = {};
            target = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            status = 7;
            status = limora[status];
            status = sierra.bind(tangon)(status);
            status = status.radii;
            status = status.round;
            target['borderRadius'] = status;
            status = whisks.icon;
            status = status.wrapper;
            status = status.size;
            target['width'] = status;
            status = whisks.icon;
            status = status.wrapper;
            status = status.size;
            target['height'] = status;
            status = whisks.icon;
            quebec = status.margin;
            variable36 = target;
            status = copyDataProperties(variable36, quebec);
            yankee['style'] = target;
            target = oscard.isGroupDM;
            target = target.bind(oscard)();
            limora = _closure1_slot6;
            if(target) { _fun00002_ip = 414; continue _fun00001 }
 396:
            status = _closure1_slot10;
            target = {};
            target['channel'] = oscard;
            target = limora.bind(tangon)(status, target);
            _fun00002_ip = 461; continue _fun00001;
 414:
            sierra = _closure1_slot1;
            equals = _closure1_slot2;
            status = 14;
            status = equals[status];
            sierra = sierra.bind(tangon)(status);
            status = {};
            status['channel'] = oscard;
            whisks = whisks.icon;
            whisks = whisks.avatarSize;
            status['size'] = whisks;
            target = limora.bind(tangon)(sierra, status);
 461:
            yankee['children'] = target;
            yankee = papara.bind(tangon)(romeon, yankee);
            option[1] = yankee;
            romeon = _closure1_slot1;
            papara = _closure1_slot2;
            yankee = 15;
            yankee = papara[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = {};
            if(!(verify == cntext)) { _fun00002_ip = 506; continue _fun00001 }
 501:
            cntext = oscard.name;
 506:
            yankee['name'] = cntext;
            yankee['subtitle'] = record;
            yankee['unread'] = config;
            yankee['resolvedUnreadSetting'] = sequen;
            yankee['muted'] = vacuum;
            yankee['lastMessageTimestampString'] = ctrled;
            yankee['channel'] = oscard;
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
            if(!yankee) { _fun00002_ip = 623; continue _fun00001 }
 592:
            romeon = _closure1_slot6;
            yankee = _closure1_slot3;
            offset = {};
            backup = {};
            backup['paddingLeft'] = kiloes;
            offset['style'] = backup;
            offset['children'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 623:
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