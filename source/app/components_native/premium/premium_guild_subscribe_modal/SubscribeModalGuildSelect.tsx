// app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ScrollView;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumGuildSubscribeModalScenes;
    var _closure1_slot9 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    golf = {};
    tango = {'backgroundColor': null, 'flexGrow': 1, 'flexShrink': 1};
    offset = 8;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MOBILE_SECONDARY;
    tango['backgroundColor'] = offset;
    golf['safeArea'] = tango;
    tango = {};
    offset = 16;
    tango['padding'] = offset;
    golf['guildList'] = tango;
    tango = {'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 10};
    golf['guildOption'] = tango;
    offset = {'marginLeft': 32, 'fontSize': 16, 'lineHeight': 20};
    tango = 20;
    yankee = 9;
    yankee = oscar[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.DARK_WHITE_500_LIGHT_PRIMARY_660;
    offset['color'] = yankee;
    golf['guildName'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SubscribeModalGuildSelect
        entity = argFoo;
        entity = entity.previousGuildSubscriptionSlot;
        var _closure2_slot0 = entity;
        mike = _closure1_slot12;
        tango = undefined;
        kilo = mike.bind(tango)();
        var _closure2_slot1 = kilo;
        offset = _closure1_slot0;
        backup = _closure1_slot3;
        mike = 10;
        mike = backup[mike];
        zulu = offset.bind(tango)(mike);
        mike = zulu.useNavigation;
        mike = mike.bind(zulu)();
        var _closure2_slot2 = mike;
        report = _closure1_slot5;
        zulu = report.useState;
        mike = '';
        report = zulu.bind(report)(mike);
        zulu = _closure1_slot4;
        mike = 2;
        zulu = zulu.bind(tango)(report, mike);
        mike = 0;
        options = zulu[mike];
        var _closure2_slot3 = options;
        mike = 1;
        sizing = zulu[mike];
        mike = 11;
        mike = backup[mike];
        golf = offset.bind(tango)(mike);
        report = golf.useStateFromStoresArray;
        mike = _closure1_slot7;
        zulu = new Array(2);
        zulu[0] = mike;
        mike = _closure1_slot8;
        zulu[1] = mike;
        mike = new Array(2);
        mike[0] = options;
        mike[1] = entity;
        entity = function() {
            _fun57487: for(var _fun57487_ip = 0; ; ) switch(_fun57487_ip) {
 0:
                entity = _closure2_slot3;
                zulu = entity.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun57487_ip = 113; continue _fun57487 }
 20:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.queryGuilds;
                entity = {};
                report = _closure2_slot3;
                entity['query'] = report;
                report = zulu.bind(tango)(entity);
                tango = report.reduce;
                entity = global;
                entity = entity.Array;
                zulu = entity.prototype;
                zulu = Object.create(zulu, {constructor: {value: entity}});
                verify = zulu;
                entity = new verify[entity](options);
                zulu = entity instanceof Object ? entity : zulu;
                entity = function(argFoo, argBar) {
                    _fun57489: for(var _fun57489_ip = 0; ; ) switch(_fun57489_ip) {
 0:
                        entity = argFoo;
                        mike = argBar;
                        zulu = mike.record;
                        tango = _closure2_slot0;
                        report = null;
                        golf = report == tango;
                        tango = undefined;
                        if(golf) { _fun57489_ip = 54; continue _fun57489 }
 30:
                        mike = _closure2_slot0;
                        mike = mike.premiumGuildSubscription;
                        report = report == mike;
                        tango = undefined;
                        if(report) { _fun57489_ip = 54; continue _fun57489 }
 49:
                        tango = mike.guildId;
 54:
                        mike = zulu.id;
                        if(!(tango !== mike)) { _fun57489_ip = 73; continue _fun57489 }
 63:
                        mike = entity.push;
                        mike = mike.bind(entity)(zulu);
 73:
                        return entity;
                    }
                };
                entity = tango.bind(report)(entity, zulu);
                _fun57487_ip = 175; continue _fun57487;
 113:
                tango = _closure1_slot8;
                zulu = tango.getFlattenedGuildIds;
                report = zulu.bind(tango)();
                tango = report.reduce;
                zulu = global;
                zulu = zulu.Array;
                oscar = zulu.prototype;
                oscar = Object.create(oscar, {constructor: {value: zulu}});
                verify = oscar;
                zulu = new verify[zulu](options);
                zulu = zulu instanceof Object ? zulu : oscar;
                mike = function(argFoo, argBar) {
                    _fun57488: for(var _fun57488_ip = 0; ; ) switch(_fun57488_ip) {
 0:
                        entity = argFoo;
                        tango = _closure1_slot7;
                        zulu = tango.getGuild;
                        mike = argBar;
                        zulu = zulu.bind(tango)(mike);
                        oscar = null;
                        mike = oscar == zulu;
                        if(mike) { _fun57488_ip = 81; continue _fun57488 }
 32:
                        report = _closure2_slot0;
                        options = oscar == report;
                        report = undefined;
                        if(options) { _fun57488_ip = 72; continue _fun57488 }
 48:
                        tango = _closure2_slot0;
                        tango = tango.premiumGuildSubscription;
                        oscar = oscar == tango;
                        report = undefined;
                        if(oscar) { _fun57488_ip = 72; continue _fun57488 }
 67:
                        report = tango.guildId;
 72:
                        tango = zulu.id;
                        mike = report === tango;
 81:
                        if(mike) { _fun57488_ip = 94; continue _fun57488 }
 84:
                        mike = entity.push;
                        mike = mike.bind(entity)(zulu);
 94:
                        return entity;
                    }
                };
                entity = tango.bind(report)(mike, zulu);
 175:
                return entity;
            }
        };
        foxtrot = report.bind(golf)(zulu, entity, mike);
        zulu = _closure1_slot11;
        verify = 13;
        entity = backup[verify];
        entity = offset.bind(tango)(entity);
        mike = entity.SafeAreaPaddingView;
        entity = {};
        romeo = true;
        entity['top'] = romeo;
        report = kilo.safeArea;
        entity['style'] = report;
        options = _closure1_slot10;
        golf = _closure1_slot1;
        report = 14;
        report = backup[report];
        golf = golf.bind(tango)(report);
        report = {};
        output = 15;
        result = backup[output];
        result = offset.bind(tango)(result);
        echo = result.intl;
        result = echo.string;
        output = backup[output];
        output = offset.bind(tango)(output);
        output = output.t;
        output = output.vf3ZTU;
        output = result.bind(echo)(output);
        report['placeholder'] = output;
        report['onChange'] = sizing;
        output = _closure1_slot2;
        sizing = 16;
        sizing = backup[sizing];
        sizing = output.bind(tango)(sizing);
        sizing = sizing.closeApplyBoostModal;
        report['onClose'] = sizing;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        golf = _closure1_slot6;
        oscar = {};
        kilo = kilo.guildList;
        oscar['style'] = kilo;
        kilo = 'always';
        oscar['keyboardShouldPersistTaps'] = kilo;
        verify = backup[verify];
        verify = offset.bind(tango)(verify);
        offset = verify.SafeAreaPaddingView;
        verify = {};
        verify['bottom'] = romeo;
        romeo = foxtrot.map;
        yankee = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            report = _closure1_slot11;
            foxtrot = _closure1_slot0;
            yankee = _closure1_slot3;
            mike = 17;
            mike = yankee[mike];
            tango = undefined;
            mike = foxtrot.bind(tango)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            options = 'button';
            mike['accessibilityRole'] = options;
            offset = _closure2_slot1;
            options = offset.guildOption;
            mike['style'] = options;
            golf = function() { // Original name: onPress
                oscar = _closure3_slot0;
                tango = _closure2_slot2;
                zulu = tango.replace;
                entity = _closure1_slot9;
                mike = entity.CONFIRMATION;
                entity = {};
                oscar = oscar.id;
                entity['guildId'] = oscar;
                report = _closure2_slot0;
                entity['previousGuildSubscriptionSlot'] = report;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            mike['onPress'] = golf;
            verify = _closure1_slot10;
            options = _closure1_slot1;
            romeo = 18;
            oscar = yankee[romeo];
            golf = options.bind(tango)(oscar);
            oscar = {};
            oscar['guild'] = entity;
            romeo = yankee[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            romeo = romeo.GuildIconSizes;
            romeo = romeo.SMALL;
            oscar['size'] = romeo;
            romeo = false;
            oscar['selected'] = romeo;
            golf = verify.bind(tango)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = 19;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            offset = offset.guildName;
            golf['style'] = offset;
            offset = entity.name;
            golf['children'] = offset;
            golf = verify.bind(tango)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = entity.id;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        };
        yankee = romeo.bind(foxtrot)(yankee);
        verify['children'] = yankee;
        verify = options.bind(tango)(offset, verify);
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();