// app/modules/main_tabs_v2/native/tabs/gravity/content_inventory/Badges.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    yankee = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: ContentTimestamp
        _fun80399: for(var _fun80399_ip = 0; ; ) switch(_fun80399_ip) {
 0:
            entity = argFoo;
            oscar = entity.entry;
            entity = _closure1_slot10;
            report = undefined;
            yankee = entity.bind(report)();
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            offset = 9;
            entity = golf[offset];
            zulu = tango.bind(report)(entity);
            entity = zulu.isEntryActive;
            entity = entity.bind(zulu)(oscar);
            zulu = 11;
            zulu = golf[zulu];
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot6;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                entity = _closure1_slot6;
                entity = entity.locale;
                return entity;
            };
            verify = golf.bind(options)(tango, zulu);
            tango = _closure1_slot7;
            if(entity) { _fun80399_ip = 181; continue _fun80399 }
 104:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 10;
            entity = golf[entity];
            entity = options.bind(report)(entity);
            zulu = entity.Text;
            entity = {};
            romeo = 'text-sm/medium';
            entity['variant'] = romeo;
            yankee = yankee.text;
            entity['style'] = yankee;
            golf = golf[offset];
            options = options.bind(report)(golf);
            golf = options.formatEndedTimestamp;
            golf = golf.bind(options)(oscar, verify);
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun80399_ip = 198; continue _fun80399;
 181:
            zulu = _closure1_slot11;
            mike = {};
            mike['entry'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 198:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: BaseBadge
        entity = argFoo;
        options = entity.Icon;
        yankee = entity.iconColor;
        verify = entity.text;
        entity = _closure1_slot10;
        tango = undefined;
        offset = entity.bind(tango)();
        zulu = _closure1_slot8;
        mike = _closure1_slot5;
        entity = {};
        report = offset.badgeContainer;
        entity['style'] = report;
        golf = _closure1_slot7;
        report = {};
        romeo = offset.icon;
        report['style'] = romeo;
        report['color'] = yankee;
        golf = golf.bind(tango)(options, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot7;
        golf = _closure1_slot0;
        yankee = _closure1_slot2;
        oscar = 10;
        oscar = yankee[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.Text;
        oscar = {};
        yankee = 'text-sm/medium';
        oscar['variant'] = yankee;
        offset = offset.text;
        oscar['style'] = offset;
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    report = golf[tango];
    tango = argCorge;
    tango = tango.bind(entity)(report);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot8 = report;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createStyles;
    tango = {};
    verify = {'width': 16, 'height': 16};
    tango['icon'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'backgroundColor': 'rgba(255, 255, 255, 0.08)', 'paddingVertical': null, 'paddingLeft': null, 'paddingRight': 10};
    offset = 6;
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    verify['paddingVertical'] = romeo;
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['paddingLeft'] = romeo;
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['badgeContainer'] = verify;
    verify = {};
    offset = golf[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    verify['color'] = offset;
    tango['text'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = function(argFoo) { // Original name: ActiveTimestamp
        entity = argFoo;
        verify = entity.entry;
        var _closure2_slot0 = verify;
        oscar = entity.style;
        entity = function() { // Original name: useTimestampTickedNow
            report = _closure1_slot4;
            tango = report.useState;
            zulu = global;
            oscar = zulu.Date;
            zulu = oscar.now;
            zulu = zulu.bind(oscar)();
            oscar = tango.bind(report)(zulu);
            tango = _closure1_slot3;
            zulu = undefined;
            entity = 2;
            tango = tango.bind(zulu)(oscar, entity);
            entity = 0;
            entity = tango[entity];
            zulu = 1;
            zulu = tango[zulu];
            var _closure3_slot0 = zulu;
            tango = report.useEffect;
            zulu = function() {
                tango = _closure1_slot0;
                golf = _closure1_slot2;
                zulu = 7;
                zulu = golf[zulu];
                oscar = undefined;
                zulu = tango.bind(oscar)(zulu);
                zulu = zulu.Interval;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                offset = tango;
                zulu = new offset[zulu](verify);
                report = zulu instanceof Object ? zulu : tango;
                var _closure4_slot0 = report;
                tango = report.start;
                zulu = _closure1_slot1;
                mike = 8;
                mike = golf[mike];
                mike = zulu.bind(oscar)(mike);
                mike = mike.Millis;
                zulu = mike.SECOND;
                mike = function() {
                    zulu = _closure3_slot0;
                    entity = global;
                    mike = entity.Date;
                    entity = mike.now;
                    mike = entity.bind(mike)();
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = tango.bind(report)(zulu, mike);
                entity = function() {
                    mike = _closure4_slot0;
                    entity = mike.stop;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            mike = new Array(0);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        tango = undefined;
        options = entity.bind(tango)();
        var _closure2_slot1 = options;
        golf = _closure1_slot4;
        report = golf.useMemo;
        zulu = new Array(2);
        zulu[0] = verify;
        zulu[1] = options;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.formatActiveTimestamp;
            mike = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report = report.bind(golf)(mike, zulu);
        zulu = _closure1_slot7;
        mike = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 10;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Text;
        entity = {'style': null, 'variant': 'text-sm/medium', 'tabularNumbers': true, 'color': 'text-positive'};
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot11 = tango;
    report = 21;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/content_inventory/Badges.tsx';
    report = oscar.bind(golf)(report);
    zulu['ActiveTimestamp'] = tango;
    tango = function(argFoo) { // Original name: GameTimestampBadge
        _fun80408: for(var _fun80408_ip = 0; ; ) switch(_fun80408_ip) {
 0:
            entity = argFoo;
            verify = entity.entry;
            entity = _closure1_slot10;
            tango = undefined;
            yankee = entity.bind(tango)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.isEntryActive;
            mike = entity.bind(mike)(verify);
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.colors;
            if(mike) { _fun80408_ip = 89; continue _fun80408 }
 81:
            offset = entity.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            _fun80408_ip = 95; continue _fun80408;
 89:
            offset = entity.STATUS_POSITIVE;
 95:
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            report = yankee.badgeContainer;
            entity['style'] = report;
            options = _closure1_slot7;
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 12;
            report = romeo[report];
            report = golf.bind(tango)(report);
            golf = report.GameControllerIcon;
            report = {};
            yankee = yankee.icon;
            report['style'] = yankee;
            report['color'] = offset;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot7;
            golf = _closure1_slot12;
            oscar = {};
            oscar['entry'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['GameTimestampBadge'] = tango;
    tango = function(argFoo) { // Original name: MarathonBadge
        _fun80409: for(var _fun80409_ip = 0; ; ) switch(_fun80409_ip) {
 0:
            entity = argFoo;
            zulu = entity.entry;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            tango = 9;
            entity = entity[tango];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.isEntryMarathon;
            entity = entity.bind(mike)(zulu);
            if(entity) { _fun80409_ip = 52; continue _fun80409 }
 48:
            entity = null;
            return entity;
 52:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tango];
            mike = mike.bind(report)(entity);
            entity = mike.isEntryActive;
            mike = entity.bind(mike)(zulu);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.colors;
            if(mike) { _fun80409_ip = 116; continue _fun80409 }
 108:
            golf = entity.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            _fun80409_ip = 122; continue _fun80409;
 116:
            golf = entity.STATUS_POSITIVE;
 122:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tango];
            mike = mike.bind(report)(entity);
            entity = mike.getMarathonDescription;
            entity = entity.bind(mike)(zulu);
            oscar = entity.text;
            entity = null;
            mike = entity == oscar;
            if(mike) { _fun80409_ip = 220; continue _fun80409 }
 164:
            tango = _closure1_slot7;
            zulu = _closure1_slot13;
            mike = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 13;
            options = offset[options];
            options = verify.bind(report)(options);
            options = options.TimerIcon;
            mike['Icon'] = options;
            mike['iconColor'] = golf;
            mike['text'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 220:
            return entity;
        }
    };
    zulu['MarathonBadge'] = tango;
    tango = function(argFoo) { // Original name: NewGameBadge
        _fun80410: for(var _fun80410_ip = 0; ; ) switch(_fun80410_ip) {
 0:
            entity = argFoo;
            zulu = entity.entry;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.isEntryNew;
            mike = entity.bind(mike)(zulu);
            entity = null;
            if(!mike) { _fun80410_ip = 183; continue _fun80410 }
 53:
            tango = _closure1_slot7;
            zulu = _closure1_slot13;
            mike = {};
            yankee = _closure1_slot0;
            options = _closure1_slot2;
            golf = 14;
            golf = options[golf];
            golf = yankee.bind(report)(golf);
            golf = golf.NewUserIcon;
            mike['Icon'] = golf;
            golf = 15;
            verify = options[golf];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = options[golf];
            golf = yankee.bind(report)(golf);
            golf = golf.t;
            golf = golf.keY6mZ;
            golf = verify.bind(offset)(golf);
            mike['text'] = golf;
            golf = _closure1_slot1;
            oscar = 6;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.colors;
            oscar = oscar.STATUS_POSITIVE;
            mike['iconColor'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 183:
            return entity;
        }
    };
    zulu['NewGameBadge'] = tango;
    tango = function(argFoo) { // Original name: StreakBadge
        _fun80411: for(var _fun80411_ip = 0; ; ) switch(_fun80411_ip) {
 0:
            entity = argFoo;
            zulu = entity.entry;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.getStreakCount;
            romeo = entity.bind(mike)(zulu);
            zulu = null;
            mike = zulu == romeo;
            entity = null;
            if(mike) { _fun80411_ip = 212; continue _fun80411 }
 59:
            mike = 2;
            mike = romeo < mike;
            entity = null;
            if(mike) { _fun80411_ip = 212; continue _fun80411 }
 74:
            tango = _closure1_slot7;
            zulu = _closure1_slot13;
            mike = {};
            verify = _closure1_slot0;
            options = _closure1_slot2;
            golf = 16;
            golf = options[golf];
            golf = verify.bind(report)(golf);
            golf = golf.FlashIcon;
            mike['Icon'] = golf;
            golf = 15;
            offset = options[golf];
            offset = verify.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.formatToPlainString;
            golf = options[golf];
            golf = verify.bind(report)(golf);
            golf = golf.t;
            verify = golf.Klie/P;
            golf = {};
            golf['days'] = romeo;
            golf = offset.bind(yankee)(verify, golf);
            mike['text'] = golf;
            golf = _closure1_slot1;
            oscar = 6;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.colors;
            oscar = oscar.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            mike['iconColor'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 212:
            return entity;
        }
    };
    zulu['StreakBadge'] = tango;
    tango = function(argFoo) { // Original name: TrendingBadge
        _fun80412: for(var _fun80412_ip = 0; ; ) switch(_fun80412_ip) {
 0:
            entity = argFoo;
            zulu = entity.entry;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.getTrendingType;
            zulu = entity.bind(mike)(zulu);
            tango = null;
            mike = tango == zulu;
            entity = null;
            if(mike) { _fun80412_ip = 230; continue _fun80412 }
 59:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 17;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.TrendingType;
            mike = mike.TRENDING_TYPE_UNSPECIFIED;
            entity = null;
            if(!(zulu !== mike)) { _fun80412_ip = 230; continue _fun80412 }
 100:
            tango = _closure1_slot7;
            zulu = _closure1_slot13;
            mike = {};
            yankee = _closure1_slot0;
            options = _closure1_slot2;
            golf = 18;
            golf = options[golf];
            golf = yankee.bind(report)(golf);
            golf = golf.FireIcon;
            mike['Icon'] = golf;
            golf = 15;
            verify = options[golf];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = options[golf];
            golf = yankee.bind(report)(golf);
            golf = golf.t;
            golf = golf.TsWCdX;
            golf = verify.bind(offset)(golf);
            mike['text'] = golf;
            golf = _closure1_slot1;
            oscar = 6;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.colors;
            oscar = oscar.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            mike['iconColor'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 230:
            return entity;
        }
    };
    zulu['TrendingBadge'] = tango;
    tango = function(argFoo) { // Original name: ResurrectedBadge
        _fun80413: for(var _fun80413_ip = 0; ; ) switch(_fun80413_ip) {
 0:
            entity = argFoo;
            zulu = entity.entry;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.getResurrectedEntryLastPlayTime;
            mike = entity.bind(mike)(zulu);
            entity = null;
            mike = entity == mike;
            if(mike) { _fun80413_ip = 187; continue _fun80413 }
 57:
            tango = _closure1_slot7;
            zulu = _closure1_slot13;
            mike = {};
            yankee = _closure1_slot0;
            options = _closure1_slot2;
            golf = 19;
            golf = options[golf];
            golf = yankee.bind(report)(golf);
            golf = golf.RetryIcon;
            mike['Icon'] = golf;
            golf = 15;
            verify = options[golf];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = options[golf];
            golf = yankee.bind(report)(golf);
            golf = golf.t;
            golf = golf.adnLsL;
            golf = verify.bind(offset)(golf);
            mike['text'] = golf;
            golf = _closure1_slot1;
            oscar = 6;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.colors;
            oscar = oscar.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            mike['iconColor'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 187:
            return entity;
        }
    };
    zulu['ResurrectedBadge'] = tango;
    tango = function(argFoo) { // Original name: TopGameBadge
        _fun80414: for(var _fun80414_ip = 0; ; ) switch(_fun80414_ip) {
 0:
            entity = argFoo;
            zulu = entity.entry;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.getEntryDuration;
            echo = entity.bind(mike)(zulu);
            entity = null;
            if(!(entity != echo)) { _fun80414_ip = 326; continue _fun80414 }
 54:
            foxtrot = _closure1_slot0;
            options = _closure1_slot2;
            romeo = 15;
            mike = options[romeo];
            mike = foxtrot.bind(report)(mike);
            mike = mike.t;
            kilo = mike.SDRHgo;
            tango = _closure1_slot7;
            zulu = _closure1_slot13;
            mike = {};
            oscar = 20;
            oscar = options[oscar];
            oscar = foxtrot.bind(report)(oscar);
            oscar = oscar.TrophyIcon;
            mike['Icon'] = oscar;
            offset = _closure1_slot8;
            verify = _closure1_slot9;
            oscar = {};
            yankee = options[romeo];
            yankee = foxtrot.bind(report)(yankee);
            sizing = yankee.intl;
            backup = sizing.string;
            yankee = options[romeo];
            yankee = foxtrot.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee./50eHh;
            backup = backup.bind(sizing)(yankee);
            yankee = new Array(3);
            yankee[0] = backup;
            backup = ': ';
            yankee[1] = backup;
            romeo = options[romeo];
            romeo = foxtrot.bind(report)(romeo);
            backup = romeo.intl;
            foxtrot = backup.format;
            romeo = {};
            sizing = global;
            result = sizing.Math;
            output = result.round;
            golf = _closure1_slot1;
            sizing = 8;
            sizing = options[sizing];
            sizing = golf.bind(report)(sizing);
            sizing = sizing.Seconds;
            sizing = sizing.HOUR;
            sizing = echo / sizing;
            sizing = output.bind(result)(sizing);
            romeo['hours'] = sizing;
            romeo = foxtrot.bind(backup)(kilo, romeo);
            yankee[2] = romeo;
            oscar['children'] = yankee;
            oscar = offset.bind(report)(verify, oscar);
            mike['text'] = oscar;
            oscar = 6;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.colors;
            oscar = oscar.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            mike['iconColor'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 326:
            return entity;
        }
    };
    zulu['TopGameBadge'] = tango;
    mike = function(argFoo) { // Original name: CustomStatusTimestampBadge
        entity = argFoo;
        verify = entity.entry;
        entity = _closure1_slot10;
        tango = undefined;
        offset = entity.bind(tango)();
        zulu = _closure1_slot8;
        mike = _closure1_slot5;
        entity = {};
        report = offset.badgeContainer;
        entity['style'] = report;
        options = _closure1_slot7;
        golf = _closure1_slot0;
        romeo = _closure1_slot2;
        report = 13;
        report = romeo[report];
        report = golf.bind(tango)(report);
        golf = report.TimerIcon;
        report = {};
        offset = offset.icon;
        report['style'] = offset;
        yankee = _closure1_slot1;
        offset = 6;
        offset = romeo[offset];
        offset = yankee.bind(tango)(offset);
        offset = offset.colors;
        offset = offset.INTERACTIVE_NORMAL;
        report['color'] = offset;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot7;
        golf = _closure1_slot12;
        oscar = {};
        oscar['entry'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['CustomStatusTimestampBadge'] = mike;
    return entity;
})();