// app/modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.Image;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_12;
    verify['paddingVertical'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['gap'] = romeo;
    tango['container'] = verify;
    romeo = 'center';
    verify = {'alignSelf': 'center', 'width': 73, 'height': 86};
    tango['headerImage'] = verify;
    verify = {'textAlign': 'center', 'alignSelf': 'center', 'width': 250};
    tango['title'] = verify;
    verify = {};
    verify['textAlign'] = romeo;
    tango['body'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    verify['paddingVertical'] = foxtrot;
    tango['guildContainer'] = verify;
    verify = {'marginTop': null, 'flexDirection': 'row', 'alignItems': 'center'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_4;
    verify['marginTop'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    verify['gap'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    verify['padding'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_SURFACE_RAISED;
    verify['backgroundColor'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.md;
    verify['borderRadius'] = foxtrot;
    tango['guildInfo'] = verify;
    verify = {};
    verify['textAlign'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingHorizontal'] = offset;
    tango['footer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: DmSettingsUpsellActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            mike = _closure1_slot9;
            report = undefined;
            backup = mike.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 6;
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
            source = tango.bind(oscar)(zulu, mike);
            var _closure2_slot1 = source;
            tango = _closure1_slot3;
            zulu = tango.useEffect;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 7;
                mike = golf[entity];
                entity = undefined;
                zulu = oscar.bind(entity)(mike);
                mike = zulu.acknowledgeDmSettingsUpsell;
                report = _closure2_slot0;
                mike = mike.bind(zulu)(report);
                mike = 8;
                zulu = golf[mike];
                tango = oscar.bind(entity)(zulu);
                zulu = tango.trackEvent;
                mike = golf[mike];
                mike = oscar.bind(entity)(mike);
                mike = mike.DmUpsellActionTypes;
                mike = mike.MODAL_VIEWED;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            entity = null;
            mike = entity == source;
            if(mike) { _fun00002_ip = 1010; continue _fun00001 }
 123:
            tango = _closure1_slot7;
            foxtrot = _closure1_slot0;
            output = _closure1_slot2;
            mike = 9;
            mike = output[mike];
            mike = foxtrot.bind(report)(mike);
            zulu = mike.ActionSheet;
            mike = {};
            oscar = true;
            mike['startExpanded'] = oscar;
            options = _closure1_slot8;
            golf = _closure1_slot4;
            oscar = {};
            verify = backup.container;
            oscar['style'] = verify;
            offset = _closure1_slot5;
            verify = {};
            update = _closure1_slot1;
            yankee = 10;
            yankee = output[yankee];
            yankee = update.bind(report)(yankee);
            verify['source'] = yankee;
            yankee = backup.headerImage;
            verify['style'] = yankee;
            offset = tango.bind(report)(offset, verify);
            verify = new Array(7);
            verify[0] = offset;
            echo = 11;
            offset = output[echo];
            offset = foxtrot.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'heading-lg/bold', 'color': 'header-primary'};
            romeo = backup.title;
            offset['style'] = romeo;
            romeo = 12;
            kilo = output[romeo];
            kilo = foxtrot.bind(report)(kilo);
            control = kilo.intl;
            result = control.string;
            kilo = output[romeo];
            kilo = foxtrot.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.w2BvnJ;
            kilo = result.bind(control)(kilo);
            offset['children'] = kilo;
            offset = tango.bind(report)(yankee, offset);
            verify[1] = offset;
            offset = output[echo];
            offset = foxtrot.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-md/normal', 'color': 'header-secondary'};
            kilo = backup.body;
            offset['style'] = kilo;
            kilo = output[romeo];
            kilo = foxtrot.bind(report)(kilo);
            vacuum = kilo.intl;
            control = vacuum.format;
            kilo = output[romeo];
            kilo = foxtrot.bind(report)(kilo);
            kilo = kilo.t;
            result = kilo.Depjkp;
            kilo = {};
            sequence = source.name;
            kilo['guild_name'] = sequence;
            kilo = control.bind(vacuum)(result, kilo);
            offset['children'] = kilo;
            offset = tango.bind(report)(yankee, offset);
            verify[2] = offset;
            offset = {};
            yankee = backup.guildContainer;
            offset['style'] = yankee;
            yankee = output[echo];
            yankee = foxtrot.bind(report)(yankee);
            kilo = yankee.Text;
            yankee = {'variant': 'eyebrow', 'color': 'header-secondary'};
            result = output[romeo];
            result = foxtrot.bind(report)(result);
            vacuum = result.intl;
            control = vacuum.string;
            result = output[romeo];
            result = foxtrot.bind(report)(result);
            result = result.t;
            result = result.KPB2i4;
            result = control.bind(vacuum)(result);
            yankee['children'] = result;
            kilo = tango.bind(report)(kilo, yankee);
            yankee = new Array(2);
            yankee[0] = kilo;
            kilo = {};
            result = backup.guildInfo;
            kilo['style'] = result;
            control = 13;
            result = output[control];
            update = update.bind(report)(result);
            result = {};
            result['guild'] = source;
            control = output[control];
            control = foxtrot.bind(report)(control);
            control = control.GuildIconSizes;
            control = control.SMALL_32;
            result['size'] = control;
            update = tango.bind(report)(update, result);
            result = new Array(2);
            result[0] = update;
            echo = output[echo];
            echo = foxtrot.bind(report)(echo);
            update = echo.Text;
            echo = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            source = source.name;
            echo['children'] = source;
            echo = tango.bind(report)(update, echo);
            result[1] = echo;
            kilo['children'] = result;
            kilo = options.bind(report)(golf, kilo);
            yankee[1] = kilo;
            offset['children'] = yankee;
            offset = options.bind(report)(golf, offset);
            verify[3] = offset;
            offset = 14;
            yankee = output[offset];
            yankee = foxtrot.bind(report)(yankee);
            kilo = yankee.Button;
            yankee = {};
            result = 'lg';
            yankee['size'] = result;
            result = function() { // Original name: onPress
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 15;
                zulu = golf[entity];
                entity = undefined;
                tango = oscar.bind(entity)(zulu);
                zulu = tango.getSanitizedRestrictedGuilds;
                offset = zulu.bind(tango)();
                zulu = offset.add;
                report = _closure2_slot0;
                zulu = zulu.bind(offset)(report);
                zulu = 16;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                options = zulu.RestrictedGuildIds;
                tango = options.updateSetting;
                zulu = global;
                verify = zulu.Array;
                zulu = verify.from;
                zulu = zulu.bind(verify)(offset);
                options = tango.bind(options)(zulu);
                tango = options.then;
                zulu = function() {
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 17;
                    mike = verify[entity];
                    entity = undefined;
                    tango = golf.bind(entity)(mike);
                    zulu = tango.open;
                    mike = {};
                    oscar = 'DM_SETTINGS_UPSELL_SUCCESS_TOAST';
                    mike['key'] = oscar;
                    oscar = 18;
                    oscar = verify[oscar];
                    oscar = golf.bind(entity)(oscar);
                    mike['icon'] = oscar;
                    options = _closure1_slot0;
                    report = 12;
                    oscar = verify[report];
                    oscar = options.bind(entity)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = verify[report];
                    report = options.bind(entity)(report);
                    report = report.t;
                    report = report.rlYD1d;
                    report = oscar.bind(golf)(report);
                    mike['content'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                zulu = tango.bind(options)(zulu);
                zulu = _closure1_slot1;
                mike = 19;
                mike = golf[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                mike = 8;
                zulu = golf[mike];
                tango = oscar.bind(entity)(zulu);
                zulu = tango.trackEvent;
                mike = golf[mike];
                mike = oscar.bind(entity)(mike);
                mike = mike.DmUpsellActionTypes;
                mike = mike.MODAL_DISABLED_DMS;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            };
            yankee['onPress'] = result;
            result = output[romeo];
            result = foxtrot.bind(report)(result);
            update = result.intl;
            echo = update.string;
            result = output[romeo];
            result = foxtrot.bind(report)(result);
            result = result.t;
            result = result.TD7iU1;
            result = echo.bind(update)(result);
            yankee['text'] = result;
            yankee = tango.bind(report)(kilo, yankee);
            verify[4] = yankee;
            offset = output[offset];
            offset = foxtrot.bind(report)(offset);
            yankee = offset.Button;
            offset = {'size': 'lg', 'variant': 'secondary'};
            kilo = function() { // Original name: onPress
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 19;
                zulu = oscar[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.hideActionSheet;
                zulu = zulu.bind(tango)();
                zulu = _closure1_slot0;
                mike = 8;
                tango = oscar[mike];
                report = zulu.bind(entity)(tango);
                tango = report.trackEvent;
                mike = oscar[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.DmUpsellActionTypes;
                zulu = mike.MODAL_DISMISSED;
                mike = _closure2_slot0;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            offset['onPress'] = kilo;
            kilo = output[romeo];
            kilo = foxtrot.bind(report)(kilo);
            echo = kilo.intl;
            result = echo.string;
            kilo = output[romeo];
            kilo = foxtrot.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.PsWbcn;
            kilo = result.bind(echo)(kilo);
            offset['text'] = kilo;
            offset = tango.bind(report)(yankee, offset);
            verify[5] = offset;
            offset = 20;
            offset = output[offset];
            offset = foxtrot.bind(report)(offset);
            yankee = offset.TextWithIOSLinkWorkaround;
            offset = {};
            kilo = 'text-xs/normal';
            offset['variant'] = kilo;
            backup = backup.footer;
            offset['style'] = backup;
            backup = output[romeo];
            backup = foxtrot.bind(report)(backup);
            kilo = backup.intl;
            backup = kilo.format;
            romeo = output[romeo];
            romeo = foxtrot.bind(report)(romeo);
            romeo = romeo.t;
            foxtrot = romeo.IzZxXV;
            romeo = {};
            sizing = function() { // Original name: onClick
                tango = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 19;
                mike = golf[entity];
                entity = undefined;
                report = tango.bind(entity)(mike);
                mike = report.hideActionSheet;
                mike = mike.bind(report)();
                mike = 21;
                mike = golf[mike];
                report = tango.bind(entity)(mike);
                tango = _closure2_slot1;
                tango = report.bind(entity)(tango);
                oscar = _closure1_slot0;
                zulu = 8;
                tango = golf[zulu];
                report = oscar.bind(entity)(tango);
                tango = report.trackEvent;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.DmUpsellActionTypes;
                zulu = zulu.MODAL_GUILD_SETTINGS_CLICKED;
                mike = _closure2_slot0;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            romeo['onClick'] = sizing;
            romeo = backup.bind(kilo)(foxtrot, romeo);
            offset['children'] = romeo;
            offset = tango.bind(report)(yankee, offset);
            verify[6] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1010:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();