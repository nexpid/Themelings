// app/modules/premium/native/BoostedGuildTierProgressCircle.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot3 = golf;
    tango = tango.Image;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.BoostedGuildTiers;
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'position': 'relative', 'width': 70, 'height': 70};
    tango['guildTierProgressCircle'] = verify;
    verify = {'backgroundColor': null, 'width': 64, 'height': 64, 'alignItems': 'center', 'justifyContent': 'center'};
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_FLOATING;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xxl;
    verify['borderRadius'] = offset;
    tango['guildTierBackground'] = verify;
    verify = {'width': 18, 'height': 30};
    tango['guildTierNoneIcon'] = verify;
    verify = {'width': 24, 'height': 24};
    tango['guildTierIcon'] = verify;
    verify = {'lineHeight': 16, 'marginTop': 2};
    tango['guildTierName'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = function(argFoo, argBar) { // Original name: getTierIcon
        _fun96069: for(var _fun96069_ip = 0; ; ) switch(_fun96069_ip) {
 0:
            mike = argBar;
            entity = null;
            if(!(entity != mike)) { _fun96069_ip = 162; continue _fun96069 }
 12:
            tango = mike.premiumTier;
            zulu = _closure1_slot5;
            zulu = zulu.NONE;
            if(!(tango !== zulu)) { _fun96069_ip = 162; continue _fun96069 }
 38:
            zulu = mike.premiumTier;
            mike = _closure1_slot5;
            mike = mike.TIER_1;
            if(!(mike !== zulu)) { _fun96069_ip = 138; continue _fun96069 }
 58:
            mike = _closure1_slot5;
            mike = mike.TIER_2;
            if(!(mike !== zulu)) { _fun96069_ip = 114; continue _fun96069 }
 72:
            mike = _closure1_slot5;
            mike = mike.TIER_3;
            if(!(mike !== zulu)) { _fun96069_ip = 90; continue _fun96069 }
 86:
            mike = undefined;
            return mike;
 90:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 114:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 138:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
 162:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getTier048PxSource;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/BoostedGuildTierProgressCircle.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun96070: for(var _fun96070_ip = 0; ; ) switch(_fun96070_ip) {
 0:
            entity = argFoo;
            backup = entity.guild;
            verify = entity.theme;
            entity = _closure1_slot8;
            tango = undefined;
            golf = entity.bind(tango)();
            entity = null;
            if(!(entity != backup)) { _fun96070_ip = 378; continue _fun96070 }
 36:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            output = 10;
            mike = mike[output];
            oscar = zulu.bind(tango)(mike);
            report = oscar.getNextGuildTierFromAppliedBoostCount;
            zulu = backup.premiumSubscriberCount;
            mike = backup.id;
            report = report.bind(oscar)(zulu, mike);
            mike = entity != report;
            zulu = null;
            if(!mike) { _fun96070_ip = 125; continue _fun96070 }
 88:
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[output];
            offset = oscar.bind(tango)(mike);
            oscar = offset.getAppliedGuildBoostsRequired;
            mike = backup.id;
            mike = oscar.bind(offset)(mike);
            zulu = mike[report];
 125:
            entity = entity != zulu;
            mike = 100;
            report = mike;
            if(!entity) { _fun96070_ip = 164; continue _fun96070 }
 138:
            entity = 0;
            entity = zulu > entity;
            report = mike;
            if(!entity) { _fun96070_ip = 164; continue _fun96070 }
 150:
            entity = backup.premiumSubscriberCount;
            entity = entity / zulu;
            report = entity * mike;
 164:
            zulu = _closure1_slot6;
            mike = _closure1_slot1;
            kilo = _closure1_slot2;
            entity = 11;
            entity = kilo[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            oscar = golf.guildTierProgressCircle;
            entity['style'] = oscar;
            entity['percent'] = report;
            offset = _closure1_slot7;
            oscar = _closure1_slot3;
            report = {};
            yankee = golf.guildTierBackground;
            report['style'] = yankee;
            romeo = _closure1_slot4;
            yankee = {};
            foxtrot = _closure1_slot9;
            foxtrot = foxtrot.bind(tango)(verify, backup);
            yankee['source'] = foxtrot;
            foxtrot = golf.guildTierIcon;
            yankee['style'] = foxtrot;
            romeo = zulu.bind(tango)(romeo, yankee);
            yankee = new Array(2);
            yankee[0] = romeo;
            sizing = _closure1_slot0;
            romeo = 12;
            romeo = kilo[romeo];
            romeo = sizing.bind(tango)(romeo);
            foxtrot = romeo.Text;
            romeo = {'style': null, 'variant': 'text-xs/semibold', 'color': 'interactive-active'};
            result = golf.guildTierName;
            romeo['style'] = result;
            kilo = kilo[output];
            sizing = sizing.bind(tango)(kilo);
            kilo = sizing.getTierName;
            backup = backup.premiumTier;
            backup = kilo.bind(sizing)(backup);
            romeo['children'] = backup;
            romeo = zulu.bind(tango)(foxtrot, romeo);
            yankee[1] = romeo;
            report['children'] = yankee;
            report = offset.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 378:
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            report = golf.guildTierBackground;
            entity['style'] = report;
            oscar = _closure1_slot4;
            report = {};
            options = _closure1_slot9;
            options = options.bind(tango)(verify);
            report['source'] = options;
            golf = golf.guildTierNoneIcon;
            report['style'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();