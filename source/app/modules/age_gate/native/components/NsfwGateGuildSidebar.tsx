// app/modules/age_gate/native/components/NsfwGateGuildSidebar.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
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
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NsfwGateSource;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot9 = golf;
    golf = tango.HelpdeskArticles;
    var _closure1_slot10 = golf;
    tango = tango.Fonts;
    var _closure1_slot11 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    yankee = 9;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.PANEL_BG;
    verify['backgroundColor'] = yankee;
    tango['container'] = verify;
    verify = {};
    verify['flex'] = offset;
    tango['emptyStateContainer'] = verify;
    verify = {};
    offset = 16;
    verify['marginBottom'] = offset;
    tango['emptyStateImageContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/age_gate/native/components/NsfwGateGuildSidebar.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            golf = mike.style;
            verify = mike.guildId;
            var _closure2_slot0 = verify;
            mike = _closure1_slot14;
            report = undefined;
            yankee = mike.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 10;
            mike = tango[mike];
            oscar = zulu.bind(report)(mike);
            tango = oscar.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot6;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = tango.bind(oscar)(zulu, mike);
            var _closure2_slot1 = options;
            zulu = _closure1_slot7;
            mike = zulu.getCurrentUser;
            oscar = mike.bind(zulu)();
            var _closure2_slot2 = oscar;
            tango = _closure1_slot3;
            zulu = tango.useEffect;
            mike = new Array(3);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = oscar;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun00004_ip = 24; continue _fun00003 }
 16:
                    mike = _closure2_slot1;
                    entity = zulu != mike;
 24:
                    if(!entity) { _fun00004_ip = 190; continue _fun00003 }
 30:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 11;
                    entity = zulu[entity];
                    verify = undefined;
                    tango = mike.bind(verify)(entity);
                    zulu = tango.track;
                    entity = _closure1_slot9;
                    mike = entity.GUILD_NSFW_GATE_VIEWED;
                    entity = {};
                    yankee = _closure2_slot0;
                    entity['guild_id'] = yankee;
                    oscar = _closure2_slot2;
                    golf = oscar.id;
                    entity['user_id'] = golf;
                    offset = _closure1_slot5;
                    options = offset.isMember;
                    golf = oscar.id;
                    golf = options.bind(offset)(yankee, golf);
                    entity['is_member'] = golf;
                    oscar = oscar.nsfwAllowed;
                    if(!oscar) { _fun00004_ip = 165; continue _fun00003 }
 129:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    golf = 12;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    options = golf.ViewNsfwGuilds;
                    golf = options.getSetting;
                    oscar = golf.bind(options)();
 165:
                    entity['is_user_opted_in_to_age_restricted_servers'] = oscar;
                    report = _closure1_slot8;
                    report = report.GUILD_SIDEBAR;
                    entity['source'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 190:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            entity = null;
            mike = entity == options;
            if(mike) { _fun00002_ip = 485; continue _fun00001 }
 153:
            tango = _closure1_slot13;
            zulu = _closure1_slot4;
            mike = {};
            verify = yankee.container;
            oscar = new Array(2);
            oscar[0] = verify;
            oscar[1] = golf;
            mike['style'] = oscar;
            verify = _closure1_slot12;
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            oscar = 13;
            oscar = output[oscar];
            golf = sizing.bind(report)(oscar);
            oscar = {};
            oscar['guild'] = options;
            options = false;
            oscar['showExtraButtons'] = options;
            golf = verify.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = 14;
            golf = output[golf];
            options = sizing.bind(report)(golf);
            golf = {};
            offset = yankee.emptyStateImageContainer;
            golf['imageStyle'] = offset;
            offset = 15;
            offset = output[offset];
            foxtrot = sizing.bind(report)(offset);
            offset = _closure1_slot11;
            romeo = offset.DISPLAY_EXTRABOLD;
            offset = 16;
            romeo = foxtrot.bind(report)(romeo, report, offset);
            golf['titleStyle'] = romeo;
            yankee = yankee.emptyStateContainer;
            golf['containerStyle'] = yankee;
            offset = output[offset];
            offset = sizing.bind(report)(offset);
            golf['source'] = offset;
            yankee = _closure1_slot0;
            offset = 17;
            romeo = output[offset];
            romeo = yankee.bind(report)(romeo);
            kilo = romeo.intl;
            foxtrot = kilo.string;
            romeo = output[offset];
            romeo = yankee.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.bAVpRU;
            romeo = foxtrot.bind(kilo)(romeo);
            golf['title'] = romeo;
            romeo = output[offset];
            romeo = yankee.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.format;
            offset = output[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.t;
            yankee = offset.NQuXf3;
            offset = {};
            kilo = 18;
            kilo = output[kilo];
            sizing = sizing.bind(report)(kilo);
            kilo = sizing.getArticleURL;
            backup = _closure1_slot10;
            backup = backup.NSFW_GUILD_GUIDELINES;
            backup = kilo.bind(sizing)(backup);
            offset['helpURL'] = backup;
            offset = romeo.bind(foxtrot)(yankee, offset);
            golf['body'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 485:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();