// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    offset = 2;
    golf = oscar[offset];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot6 = golf;
    tango = tango.SectionList;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-start', 'height': '100%'};
    yankee = 7;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtrot;
    tango['container'] = verify;
    verify = {'flexGrow': 0, 'marginVertical': 24, 'marginHorizontal': 16};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    verify['borderRadius'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = yankee;
    tango['emojiList'] = verify;
    verify = {'alignItems': 'flex-start', 'paddingTop': 16, 'paddingBottom': 14};
    tango['row'] = verify;
    verify = {'width': 24, 'height': 24, 'marginBottom': 2};
    tango['emojiImage'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tango['emojiAlias'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildRoleSubscriptionEmojiEditorModal
        entity = argFoo;
        zulu = entity.guildId;
        var _closure2_slot0 = zulu;
        options = entity.subscriptionRoleId;
        var _closure2_slot1 = options;
        mike = entity.initialTierEmojiIds;
        foxtrot = entity.listingId;
        backup = entity.onClose;
        var _closure2_slot2 = backup;
        entity = entity.onSave;
        var _closure2_slot3 = entity;
        entity = _closure1_slot12;
        tango = undefined;
        yankee = entity.bind(tango)();
        var _closure2_slot4 = yankee;
        golf = _closure1_slot1;
        sizing = _closure1_slot2;
        entity = 8;
        entity = sizing[entity];
        entity = golf.bind(tango)(entity);
        offset = entity.bind(tango)(zulu);
        var _closure2_slot5 = offset;
        kilo = _closure1_slot0;
        entity = 9;
        entity = sizing[entity];
        romeo = kilo.bind(tango)(entity);
        report = romeo.useStateFromStores;
        entity = _closure1_slot8;
        zulu = new Array(1);
        zulu[0] = entity;
        entity = function() {
            zulu = _closure1_slot8;
            mike = zulu.getSubscriptionRoles;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        romeo = report.bind(romeo)(zulu, entity);
        var _closure2_slot6 = romeo;
        report = _closure1_slot5;
        entity = report.useState;
        zulu = entity.bind(report)(mike);
        mike = _closure1_slot4;
        entity = 2;
        zulu = mike.bind(tango)(zulu, entity);
        entity = 0;
        entity = zulu[entity];
        var _closure2_slot7 = entity;
        mike = 1;
        mike = zulu[mike];
        var _closure2_slot8 = mike;
        zulu = report.useMemo;
        mike = new Array(4);
        mike[0] = romeo;
        mike[1] = offset;
        mike[2] = options;
        mike[3] = entity;
        entity = function() {
            _fun127238: for(var _fun127238_ip = 0; ; ) switch(_fun127238_ip) {
 0:
                tango = _closure2_slot1;
                zulu = null;
                if(!(zulu != tango)) { _fun127238_ip = 83; continue _fun127238 }
 15:
                tango = _closure2_slot5;
                zulu = tango.filter;
                mike = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    zulu = mike.roles;
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        _fun127240: for(var _fun127240_ip = 0; ; ) switch(_fun127240_ip) {
 0:
                            tango = argFoo;
                            entity = _closure2_slot1;
                            zulu = tango === entity;
                            if(!zulu) { _fun127240_ip = 46; continue _fun127240 }
 17:
                            oscar = _closure2_slot7;
                            report = oscar.has;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            entity = report.bind(oscar)(entity);
                            zulu = !entity;
 46:
                            entity = !zulu;
                            if(zulu) { _fun127240_ip = 66; continue _fun127240 }
 52:
                            zulu = _closure2_slot6;
                            mike = zulu.has;
                            entity = mike.bind(zulu)(tango);
 66:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    mike = entity.length;
                    entity = 0;
                    entity = entity === mike;
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                mike = global;
                zulu = mike.Set;
                mike = tango.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                report = mike.bind(tango)(entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                oscar = mike;
                entity = new oscar[zulu](report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
 83:
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                oscar = mike;
                entity = new oscar[entity](report);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity = zulu.bind(report)(entity, mike);
        var _closure2_slot9 = entity;
        entity = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun127244: for(var _fun127244_ip = 0; ; ) switch(_fun127244_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun127244_ip = 55; continue _fun127244 }
 7: // try_start_0
                        report = _closure2_slot3;
                        mike = _closure2_slot7;
                        tango = undefined;
                        mike = report.bind(tango)(mike);
                        SaveGenerator(address=29);
 27:
                        return mike;
 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun127244_ip = 45; continue _fun127244 }
 35:
                        zulu = _closure2_slot2;
                        zulu = zulu.bind(tango)();
 43: // try_end0
                        _fun127244_ip = 50; continue _fun127244;
 45:
                        return mike;
 48: // catch_target0
                        CatchBlockStart(arg_register=1);
 50:
                        mike = undefined;
                        return mike;
 55:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = entity.bind(tango)();
        var _closure2_slot10 = entity;
        zulu = _closure1_slot11;
        mike = _closure1_slot6;
        entity = {};
        report = yankee.container;
        entity['style'] = report;
        options = _closure1_slot9;
        report = 12;
        report = sizing[report];
        golf = golf.bind(tango)(report);
        report = {};
        romeo = 13;
        output = sizing[romeo];
        output = kilo.bind(tango)(output);
        echo = output.intl;
        result = echo.string;
        output = sizing[romeo];
        output = kilo.bind(tango)(output);
        output = output.t;
        output = output.W4XhnZ;
        output = result.bind(echo)(output);
        report['title'] = output;
        report['onClose'] = backup;
        backup = function() { // Original name: onSave
            _fun127246: for(var _fun127246_ip = 0; ; ) switch(_fun127246_ip) {
 0:
                mike = _closure2_slot9;
                zulu = mike.size;
                mike = 0;
                if(!(mike !== zulu)) { _fun127246_ip = 319; continue _fun127246 }
 21:
                golf = _closure1_slot1;
                options = _closure1_slot2;
                mike = 14;
                mike = options[mike];
                oscar = undefined;
                tango = golf.bind(oscar)(mike);
                zulu = tango.show;
                mike = {};
                yankee = _closure1_slot0;
                report = 13;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                romeo = verify.intl;
                offset = romeo.string;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                verify = verify.t;
                verify = verify.30V0t7;
                verify = offset.bind(romeo)(verify);
                mike['title'] = verify;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                foxtrot = verify.intl;
                romeo = foxtrot.formatToPlainString;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                verify = verify.t;
                offset = verify.o6j/wM;
                verify = {};
                backup = _closure2_slot9;
                backup = backup.size;
                verify['numberOfEmojiSlatedForDeletion'] = backup;
                verify = romeo.bind(foxtrot)(offset, verify);
                mike['body'] = verify;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                romeo = verify.intl;
                offset = romeo.string;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                verify = verify.t;
                verify = verify.ETE/oK;
                verify = offset.bind(romeo)(verify);
                mike['cancelText'] = verify;
                verify = options[report];
                verify = yankee.bind(oscar)(verify);
                offset = verify.intl;
                verify = offset.string;
                report = options[report];
                report = yankee.bind(oscar)(report);
                report = report.t;
                report = report.cY+Ooa;
                report = verify.bind(offset)(report);
                mike['confirmText'] = report;
                report = _closure2_slot10;
                mike['onConfirm'] = report;
                report = 15;
                report = options[report];
                report = golf.bind(oscar)(report);
                report = report.Colors;
                report = report.RED;
                mike['confirmColor'] = report;
                mike = zulu.bind(tango)(mike);
                _fun127246_ip = 329; continue _fun127246;
 319:
                mike = _closure2_slot10;
                entity = undefined;
                entity = mike.bind(entity)();
 329:
                entity = undefined;
                return entity;
            }
        };
        report['onSave'] = backup;
        report['listingId'] = foxtrot;
        foxtrot = true;
        report['canSave'] = foxtrot;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        golf = _closure1_slot7;
        oscar = {};
        yankee = yankee.emojiList;
        oscar['style'] = yankee;
        yankee = function(argFoo) { // Original name: renderItem
            entity = argFoo;
            sizing = entity.item;
            var _closure3_slot0 = sizing;
            zulu = _closure2_slot7;
            mike = zulu.has;
            entity = sizing.id;
            golf = mike.bind(zulu)(entity);
            zulu = _closure2_slot9;
            mike = zulu.has;
            entity = sizing.id;
            entity = mike.bind(zulu)(entity);
            var _closure3_slot1 = entity;
            tango = _closure1_slot9;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 16;
            entity = options[report];
            zulu = undefined;
            entity = oscar.bind(zulu)(entity);
            mike = entity.FormRow;
            entity = {};
            romeo = _closure2_slot4;
            yankee = romeo.row;
            entity['style'] = yankee;
            backup = _closure1_slot1;
            offset = 10;
            offset = options[offset];
            yankee = backup.bind(zulu)(offset);
            offset = {};
            romeo = romeo.emojiImage;
            offset['style'] = romeo;
            romeo = {};
            foxtrot = 11;
            foxtrot = options[foxtrot];
            kilo = backup.bind(zulu)(foxtrot);
            backup = kilo.getEmojiURL;
            foxtrot = {};
            output = sizing.id;
            foxtrot['id'] = output;
            sizing = sizing.animated;
            foxtrot['animated'] = sizing;
            sizing = 48;
            foxtrot['size'] = sizing;
            foxtrot = backup.bind(kilo)(foxtrot);
            romeo['uri'] = foxtrot;
            offset['source'] = romeo;
            offset = tango.bind(zulu)(yankee, offset);
            entity['leading'] = offset;
            offset = function() { // Original name: label
                _fun127248: for(var _fun127248_ip = 0; ; ) switch(_fun127248_ip) {
 0:
                    tango = _closure1_slot11;
                    zulu = _closure1_slot10;
                    mike = {};
                    options = _closure1_slot9;
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 17;
                    report = report[entity];
                    entity = undefined;
                    golf = oscar.bind(entity)(report);
                    report = {};
                    verify = _closure3_slot0;
                    verify = verify.name;
                    report['name'] = verify;
                    verify = _closure2_slot4;
                    verify = verify.emojiAlias;
                    report['style'] = verify;
                    golf = options.bind(entity)(golf, report);
                    report = new Array(2);
                    report[0] = golf;
                    oscar = _closure3_slot1;
                    if(!oscar) { _fun127248_ip = 312; continue _fun127248 }
 98:
                    verify = _closure1_slot11;
                    options = _closure1_slot10;
                    golf = {};
                    foxtrot = _closure1_slot9;
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    yankee = 18;
                    offset = result[yankee];
                    offset = output.bind(entity)(offset);
                    romeo = offset.Text;
                    offset = {'variant': 'text-sm/normal', 'color': 'interactive-active'};
                    backup = 13;
                    kilo = result[backup];
                    kilo = output.bind(entity)(kilo);
                    echo = kilo.intl;
                    sizing = echo.string;
                    kilo = result[backup];
                    kilo = output.bind(entity)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.1GlN09;
                    kilo = sizing.bind(echo)(kilo);
                    offset['children'] = kilo;
                    romeo = foxtrot.bind(entity)(romeo, offset);
                    offset = new Array(2);
                    offset[0] = romeo;
                    yankee = result[yankee];
                    yankee = output.bind(entity)(yankee);
                    romeo = yankee.Text;
                    yankee = {'variant': 'text-sm/normal', 'color': 'text-danger'};
                    kilo = result[backup];
                    kilo = output.bind(entity)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    backup = result[backup];
                    backup = output.bind(entity)(backup);
                    backup = backup.t;
                    backup = backup.J0XdJy;
                    backup = kilo.bind(sizing)(backup);
                    yankee['children'] = backup;
                    yankee = foxtrot.bind(entity)(romeo, yankee);
                    offset[1] = yankee;
                    golf['children'] = offset;
                    oscar = verify.bind(entity)(options, golf);
 312:
                    report[1] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            entity['label'] = offset;
            verify = function() { // Original name: onPress
                _fun127249: for(var _fun127249_ip = 0; ; ) switch(_fun127249_ip) {
 0:
                    entity = _closure3_slot0;
                    tango = entity.id;
                    entity = global;
                    report = entity.Set;
                    oscar = _closure2_slot7;
                    zulu = report.prototype;
                    zulu = Object.create(zulu, {constructor: {value: report}});
                    golf = zulu;
                    mike = new golf[report](oscar, report);
                    zulu = mike instanceof Object ? mike : zulu;
                    mike = zulu.has;
                    mike = mike.bind(zulu)(tango);
                    if(mike) { _fun127249_ip = 72; continue _fun127249 }
 60:
                    mike = zulu.add;
                    mike = mike.bind(zulu)(tango);
                    _fun127249_ip = 82; continue _fun127249;
 72:
                    mike = zulu.delete;
                    mike = mike.bind(zulu)(tango);
 82:
                    mike = _closure2_slot8;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = verify;
            report = options[report];
            report = oscar.bind(zulu)(report);
            report = report.FormRow;
            oscar = report.Checkbox;
            report = {};
            report['selected'] = golf;
            report = tango.bind(zulu)(oscar, report);
            entity['trailing'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        oscar['renderItem'] = yankee;
        yankee = {};
        foxtrot = sizing[romeo];
        foxtrot = kilo.bind(tango)(foxtrot);
        backup = foxtrot.intl;
        foxtrot = backup.string;
        romeo = sizing[romeo];
        romeo = kilo.bind(tango)(romeo);
        romeo = romeo.t;
        romeo = romeo.9Oq93t;
        romeo = foxtrot.bind(backup)(romeo);
        yankee['title'] = romeo;
        yankee['data'] = offset;
        offset = new Array(1);
        offset[0] = yankee;
        oscar['sections'] = offset;
        verify = function() { // Original name: ItemSeparatorComponent
            tango = _closure1_slot9;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.FormDivider;
            entity = {};
            report = true;
            entity['iconPush'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        oscar['ItemSeparatorComponent'] = verify;
        verify = 'always';
        oscar['keyboardShouldPersistTaps'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();