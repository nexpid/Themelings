// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = function() { // Original name: ArchiveOrDeleteTierSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot17;
            tango = undefined;
            kilo = entity.bind(tango)();
            var _closure2_slot0 = kilo;
            options = _closure1_slot0;
            result = _closure1_slot3;
            entity = 12;
            entity = result[entity];
            mike = options.bind(tango)(entity);
            entity = mike.useNavigation;
            source = entity.bind(mike)();
            entity = 13;
            entity = result[entity];
            mike = options.bind(tango)(entity);
            entity = mike.useEditStateContext;
            entity = entity.bind(mike)();
            zulu = entity.guildId;
            vacuum = entity.groupListingId;
            control = entity.editStateId;
            output = _closure1_slot1;
            entity = 14;
            entity = result[entity];
            entity = output.bind(tango)(entity);
            config = undefined;
            sequence = zulu;
            entity = config[entity](sequence, vacuum, control, source, update);
            verify = entity.buttonText;
            echo = entity.descriptionText;
            foxtrot = entity.handleArchiveOrDelete;
            romeo = entity.deleting;
            yankee = entity.archiving;
            entity = 15;
            entity = result[entity];
            mike = options.bind(tango)(entity);
            entity = mike.useShouldRestrictUpdatingCreatorMonetizationSettings;
            entity = entity.bind(mike)(zulu);
            offset = entity.allowSelfRemoveMonetization;
            zulu = _closure1_slot16;
            mike = _closure1_slot15;
            entity = {};
            sizing = _closure1_slot14;
            report = 16;
            report = result[report];
            golf = output.bind(tango)(report);
            report = {};
            update = kilo.actionHeader;
            report['style'] = update;
            report['children'] = verify;
            golf = sizing.bind(tango)(golf, report);
            report = new Array(3);
            report[0] = golf;
            sizing = _closure1_slot14;
            golf = 17;
            golf = result[golf];
            golf = options.bind(tango)(golf);
            options = golf.Text;
            golf = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            update = kilo.actionDescription;
            golf['style'] = update;
            golf['children'] = echo;
            golf = sizing.bind(tango)(options, golf);
            report[1] = golf;
            options = _closure1_slot14;
            sizing = 18;
            oscar = result[sizing];
            golf = output.bind(tango)(oscar);
            oscar = {};
            sizing = result[sizing];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.Colors;
            sizing = sizing.RED;
            oscar['color'] = sizing;
            kilo = kilo.actionButton;
            oscar['style'] = kilo;
            backup = function() { // Original name: renderIcon
                tango = _closure1_slot14;
                oscar = _closure1_slot1;
                golf = _closure1_slot3;
                report = 19;
                entity = golf[report];
                zulu = undefined;
                mike = oscar.bind(zulu)(entity);
                entity = {};
                options = _closure2_slot0;
                options = options.actionButtonIcon;
                entity['style'] = options;
                report = golf[report];
                report = oscar.bind(zulu)(report);
                report = report.Sizes;
                report = report.SMALL;
                entity['size'] = report;
                report = true;
                entity['disableColor'] = report;
                report = 20;
                report = golf[report];
                report = oscar.bind(zulu)(report);
                entity['source'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            oscar['renderIcon'] = backup;
            oscar['onPress'] = foxtrot;
            offset = !offset;
            if(offset) { _fun00002_ip = 367; continue _fun00001 }
 364:
            offset = romeo;
 367:
            if(offset) { _fun00002_ip = 373; continue _fun00001 }
 370:
            offset = yankee;
 373:
            oscar['disabled'] = offset;
            oscar['text'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: TabContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = entity.selectedTab;
            entity = _closure1_slot17;
            tango = undefined;
            report = entity.bind(tango)();
            entity = _closure1_slot11;
            entity = entity.DETAILS;
            if(!(entity !== oscar)) { _fun00004_ip = 199; continue _fun00003 }
 39:
            entity = _closure1_slot11;
            entity = entity.DESIGN;
            if(!(entity !== oscar)) { _fun00004_ip = 159; continue _fun00003 }
 53:
            entity = _closure1_slot11;
            entity = entity.BENEFITS;
            if(!(entity !== oscar)) { _fun00004_ip = 119; continue _fun00003 }
 67:
            entity = global;
            zulu = entity.Error;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Unsupported scene: ';
            backup = mike.bind(entity)(oscar);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            kilo = mike;
            entity = new kilo[zulu](backup, foxtrot);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
 119:
            zulu = _closure1_slot14;
            mike = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 24;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.GuildRoleSubscriptionTierBenefitsTab;
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 159:
            zulu = _closure1_slot14;
            mike = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 23;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.GuildRoleSubscriptionTierDesignTab;
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 199:
            zulu = _closure1_slot14;
            mike = _closure1_slot7;
            entity = {};
            report = report.tabContent;
            entity['style'] = report;
            golf = _closure1_slot16;
            offset = _closure1_slot0;
            romeo = _closure1_slot3;
            report = 21;
            report = romeo[report];
            report = offset.bind(tango)(report);
            oscar = report.SafeAreaPaddingView;
            report = {};
            options = true;
            report['bottom'] = options;
            yankee = _closure1_slot14;
            options = 22;
            options = romeo[options];
            options = offset.bind(tango)(options);
            offset = options.GuildRoleSubscriptionTierDetailsTab;
            options = {};
            offset = yankee.bind(tango)(offset, options);
            options = new Array(2);
            options[0] = offset;
            yankee = _closure1_slot14;
            offset = _closure1_slot21;
            verify = {};
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    kilo = 0;
    tango = oscar[kilo];
    entity = undefined;
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot4 = tango;
    sizing = 1;
    tango = oscar[sizing];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = oscar[sizing];
    tango = report.bind(entity)(tango);
    golf = tango.forwardRef;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot6 = verify;
    tango = tango.ScrollView;
    var _closure1_slot7 = tango;
    tango = 3;
    verify = oscar[tango];
    verify = foxtrot.bind(entity)(verify);
    var _closure1_slot8 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FetchState;
    var _closure1_slot9 = tango;
    backup = 4;
    tango = oscar[backup];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot11 = tango;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    romeo = options.Fonts;
    options = options.GuildSettingsSections;
    var _closure1_slot12 = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ContentDismissActionType;
    var _closure1_slot13 = options;
    options = 8;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot14 = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot15 = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot16 = options;
    options = 9;
    options = oscar[options];
    offset = report.bind(entity)(options);
    verify = offset.createStyles;
    options = {};
    yankee = {};
    yankee['flex'] = sizing;
    options['container'] = yankee;
    yankee = {};
    sizing = 10;
    sizing = oscar[sizing];
    echo = foxtrot.bind(entity)(sizing);
    result = romeo.PRIMARY_SEMIBOLD;
    romeo = 11;
    sizing = oscar[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    output = sizing.TEXT_LINK;
    sizing = 16;
    source = echo.bind(entity)(result, output, sizing);
    control = yankee;
    output = copyDataProperties(control, source);
    options['saveButtonLabel'] = yankee;
    yankee = {};
    output = oscar[romeo];
    output = foxtrot.bind(entity)(output);
    output = output.colors;
    output = output.BACKGROUND_SECONDARY;
    yankee['backgroundColor'] = output;
    yankee['padding'] = sizing;
    options['tabsContainer'] = yankee;
    yankee = {};
    yankee['paddingBottom'] = kilo;
    options['tabsContainerWithDraft'] = yankee;
    yankee = {'alignSelf': 'stretch', 'margin': 16, 'marginTop': 0};
    options['actionButton'] = yankee;
    yankee = {};
    yankee['marginEnd'] = backup;
    options['actionButtonIcon'] = yankee;
    yankee = {};
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_PRIMARY;
    yankee['backgroundColor'] = romeo;
    options['tabContent'] = yankee;
    yankee = {'marginTop': 24, 'paddingStart': 16};
    options['actionHeader'] = yankee;
    yankee = {'marginBottom': 16, 'marginLeft': 16};
    options['actionDescription'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot17 = options;
    options = tango.DETAILS;
    offset = new Array(3);
    offset[0] = options;
    options = tango.DESIGN;
    offset[1] = options;
    tango = tango.BENEFITS;
    offset[2] = tango;
    var _closure1_slot18 = offset;
    verify = offset.reduce;
    options = function(argFoo, argBar, argBaz) {
        entity = argFoo;
        zulu = argBaz;
        mike = argBar;
        entity[mike] = zulu;
        return entity;
    };
    tango = {};
    tango = verify.bind(offset)(options, tango);
    var _closure1_slot19 = tango;
    tango = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            entity = 13;
            entity = report[entity];
            oscar = undefined;
            mike = tango.bind(oscar)(entity);
            entity = mike.useEditStateContext;
            mike = entity.bind(mike)();
            entity = mike.guildId;
            var _closure2_slot0 = entity;
            entity = mike.groupListingId;
            var _closure2_slot1 = entity;
            verify = mike.editStateId;
            mike = 25;
            zulu = report[mike];
            golf = tango.bind(oscar)(zulu);
            zulu = golf.usePublishSubscriptionListing;
            zulu = zulu.bind(golf)();
            output = zulu.error;
            golf = zulu.submitting;
            yankee = zulu.publishSubscriptionListing;
            var _closure2_slot2 = yankee;
            zulu = zulu.clearError;
            var _closure2_slot3 = zulu;
            mike = report[mike];
            zulu = tango.bind(oscar)(mike);
            mike = zulu.useSubscriptionListing;
            zulu = mike.bind(zulu)(verify);
            var _closure2_slot4 = zulu;
            mike = 26;
            mike = report[mike];
            tango = tango.bind(oscar)(mike);
            mike = tango.useRoleSubscriptionSettingsDisabled;
            report = mike.bind(tango)();
            yankee = _closure1_slot5;
            verify = yankee.useImperativeHandle;
            tango = argBar;
            mike = function() {
                entity = {};
                mike = _closure2_slot3;
                entity['dismissError'] = mike;
                return entity;
            };
            mike = verify.bind(yankee)(tango, mike);
            mike = null;
            tango = mike == entity;
            entity = null;
            if(tango) { _fun00006_ip = 541; continue _fun00005 }
 201:
            tango = mike == zulu;
            entity = null;
            if(tango) { _fun00006_ip = 541; continue _fun00005 }
 213:
            zulu = zulu.published;
            entity = null;
            if(zulu) { _fun00006_ip = 541; continue _fun00005 }
 227:
            if(!(mike == output)) { _fun00006_ip = 400; continue _fun00005 }
 234:
            tango = _closure1_slot14;
            zulu = _closure1_slot1;
            backup = _closure1_slot3;
            mike = 29;
            mike = backup[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = {};
            foxtrot = _closure1_slot0;
            verify = 30;
            yankee = backup[verify];
            yankee = foxtrot.bind(oscar)(yankee);
            kilo = yankee.intl;
            romeo = kilo.string;
            yankee = backup[verify];
            yankee = foxtrot.bind(oscar)(yankee);
            yankee = yankee.t;
            yankee = yankee.V5mSp6;
            yankee = romeo.bind(kilo)(yankee);
            mike['message'] = yankee;
            yankee = backup[verify];
            yankee = foxtrot.bind(oscar)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.Lj6R5u;
            verify = yankee.bind(romeo)(verify);
            mike['ctaMessage'] = verify;
            options = function() { // Original name: onClick
                zulu = _closure2_slot2;
                mike = {};
                tango = _closure2_slot0;
                mike['guildId'] = tango;
                tango = _closure2_slot1;
                mike['groupListingId'] = tango;
                entity = _closure2_slot4;
                entity = entity.id;
                mike['listingId'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onClick'] = options;
            mike['submitting'] = golf;
            mike['disabled'] = report;
            mike = tango.bind(oscar)(zulu, mike);
            _fun00006_ip = 538; continue _fun00005;
 400:
            report = _closure1_slot16;
            tango = _closure1_slot15;
            zulu = {};
            backup = _closure1_slot14;
            verify = _closure1_slot1;
            romeo = _closure1_slot3;
            options = 27;
            golf = romeo[options];
            foxtrot = verify.bind(oscar)(golf);
            golf = {};
            yankee = 16;
            golf['size'] = yankee;
            foxtrot = backup.bind(oscar)(foxtrot, golf);
            golf = new Array(3);
            golf[0] = foxtrot;
            kilo = _closure1_slot14;
            foxtrot = 28;
            foxtrot = romeo[foxtrot];
            backup = verify.bind(oscar)(foxtrot);
            foxtrot = {};
            sizing = output.getAnyErrorMessage;
            sizing = sizing.bind(output)();
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(oscar)(backup, foxtrot);
            golf[1] = foxtrot;
            offset = _closure1_slot14;
            options = romeo[options];
            verify = verify.bind(oscar)(options);
            options = {};
            options['size'] = yankee;
            options = offset.bind(oscar)(verify, options);
            golf[2] = options;
            zulu['children'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 538:
            entity = mike;
 541:
            return entity;
        }
    };
    tango = golf.bind(entity)(tango);
    var _closure1_slot20 = tango;
    tango = 42;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildSettingsRoleSubscriptionTierEdit
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            var _closure2_slot0 = verify;
            zulu = entity.initialEditStateId;
            oscar = entity.groupListingId;
            var _closure2_slot1 = oscar;
            config = entity.onBeforeDispatchNewListing;
            var _closure2_slot2 = config;
            report = undefined;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            entity = _closure1_slot17;
            echo = entity.bind(report)();
            mike = _closure1_slot5;
            entity = mike.useState;
            entity = entity.bind(mike)(zulu);
            tango = _closure1_slot4;
            vacuum = 2;
            entity = tango.bind(report)(entity, vacuum);
            offset = 0;
            options = entity[offset];
            var _closure2_slot3 = options;
            romeo = 1;
            entity = entity[romeo];
            var _closure2_slot4 = entity;
            golf = _closure1_slot0;
            entity = _closure1_slot3;
            mike = 12;
            mike = entity[mike];
            zulu = golf.bind(report)(mike);
            mike = zulu.useNavigation;
            zulu = mike.bind(zulu)();
            var _closure2_slot5 = zulu;
            mike = 25;
            mike = entity[mike];
            golf = golf.bind(report)(mike);
            mike = golf.useSubscriptionListing;
            mike = mike.bind(golf)(options);
            yankee = _closure1_slot2;
            golf = 31;
            entity = entity[golf];
            yankee = yankee.bind(report)(entity);
            entity = yankee.useName;
            entity = entity.bind(yankee)(options);
            entity = tango.bind(report)(entity, romeo);
            kilo = entity[offset];
            var _closure2_slot6 = kilo;
            entity = null;
            yankee = entity == mike;
            tango = undefined;
            if(yankee) { _fun00008_ip = 252; continue _fun00007 }
 246:
            tango = mike.published;
 252:
            control = entity != tango;
            if(!control) { _fun00008_ip = 262; continue _fun00007 }
 259:
            control = tango;
 262:
            backup = _closure1_slot2;
            result = _closure1_slot3;
            tango = result[golf];
            yankee = backup.bind(report)(tango);
            tango = yankee.useEditStateIds;
            tango = tango.bind(yankee)(oscar, verify);
            tango = tango.removeEditStateId;
            _closure2_slot7 = tango;
            yankee = _closure1_slot5;
            sizing = yankee.useRef;
            source = sizing.bind(yankee)(entity);
            _closure2_slot8 = source;
            sizing = result[golf];
            update = backup.bind(report)(sizing);
            sizing = update.useHasChanges;
            update = sizing.bind(update)(options);
            _closure2_slot9 = update;
            golf = result[golf];
            backup = backup.bind(report)(golf);
            golf = backup.useCreateOrUpdateListingFromEditState;
            golf = golf.bind(backup)();
            backup = golf.loading;
            _closure2_slot10 = backup;
            record = golf.handleCreateOrUpdateFromEditState;
            _closure2_slot11 = record;
            golf = golf.error;
            _closure2_slot12 = golf;
            sequence = yankee.useCallback;
            sizing = new Array(6);
            sizing[0] = verify;
            sizing[1] = record;
            sizing[2] = options;
            sizing[3] = oscar;
            sizing[4] = config;
            sizing[5] = tango;
            tango = function() {
                zulu = _closure2_slot11;
                mike = {};
                tango = _closure2_slot0;
                mike['guildId'] = tango;
                tango = _closure2_slot3;
                mike['editStateId'] = tango;
                tango = _closure2_slot1;
                mike['groupListingId'] = tango;
                entity = _closure2_slot2;
                mike['onBeforeDispatchNewListing'] = entity;
                entity = function(argFoo) { // Original name: onAfterDispatchNewListing
                    tango = _closure2_slot4;
                    entity = argFoo;
                    zulu = entity.id;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    zulu = _closure2_slot7;
                    mike = _closure2_slot3;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onAfterDispatchNewListing'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            tango = sequence.bind(yankee)(tango, sizing);
            _closure2_slot13 = tango;
            sequence = yankee.useLayoutEffect;
            sizing = new Array(1);
            sizing[0] = golf;
            golf = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot12;
                    report = null;
                    if(!(report != mike)) { _fun00010_ip = 122; continue _fun00009 }
 13:
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot3;
                    mike = 32;
                    mike = oscar[mike];
                    options = undefined;
                    zulu = zulu.bind(options)(mike);
                    mike = zulu.presentError;
                    oscar = _closure2_slot12;
                    entity = oscar.getAnyErrorMessage;
                    entity = entity.bind(oscar)();
                    if(!(report == entity)) { _fun00010_ip = 117; continue _fun00009 }
 62:
                    golf = _closure1_slot0;
                    verify = _closure1_slot3;
                    tango = 30;
                    report = verify[tango];
                    report = golf.bind(options)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    tango = verify[tango];
                    tango = golf.bind(options)(tango);
                    tango = tango.t;
                    tango = tango.R0RpRU;
                    entity = report.bind(oscar)(tango);
 117:
                    entity = mike.bind(zulu)(entity);
 122:
                    entity = undefined;
                    return entity;
                }
            };
            golf = sequence.bind(yankee)(golf, sizing);
            sequence = _closure1_slot10;
            sizing = sequence.useRoleTierEditStore;
            golf = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.currentScene;
                    entity = null;
                    if(!(entity == zulu)) { _fun00012_ip = 28; continue _fun00011 }
 15:
                    entity = _closure1_slot11;
                    zulu = entity.DETAILS;
 28:
                    entity = new Array(2);
                    entity[0] = zulu;
                    mike = mike.setScene;
                    entity[1] = mike;
                    return entity;
                }
            };
            sizing = sizing.bind(sequence)(golf);
            golf = _closure1_slot4;
            golf = golf.bind(report)(sizing, vacuum);
            sizing = golf[offset];
            golf = golf[romeo];
            _closure2_slot14 = golf;
            romeo = yankee.useLayoutEffect;
            golf = new Array(5);
            golf[0] = zulu;
            golf[1] = update;
            golf[2] = kilo;
            golf[3] = backup;
            golf[4] = tango;
            tango = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot5;
                    mike = zulu.setOptions;
                    entity = {};
                    report = _closure2_slot10;
                    if(report) { _fun00014_ip = 33; continue _fun00013 }
 24:
                    report = function() {
                        tango = _closure1_slot14;
                        options = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 34;
                        entity = verify[entity];
                        zulu = undefined;
                        entity = options.bind(zulu)(entity);
                        mike = entity.HeaderActionButton;
                        entity = {};
                        report = 30;
                        oscar = verify[report];
                        oscar = options.bind(zulu)(oscar);
                        golf = oscar.intl;
                        oscar = golf.string;
                        report = verify[report];
                        report = options.bind(zulu)(report);
                        report = report.t;
                        report = report.R3BPHx;
                        report = oscar.bind(golf)(report);
                        entity['text'] = report;
                        oscar = _closure2_slot13;
                        entity['onPress'] = oscar;
                        report = _closure2_slot9;
                        report = !report;
                        entity['disabled'] = report;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    _fun00014_ip = 40; continue _fun00013;
 33:
                    report = function() {
                        tango = _closure1_slot14;
                        mike = _closure1_slot0;
                        zulu = _closure1_slot3;
                        entity = 33;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.HeaderSubmittingIndicator;
                        entity = {};
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
 40:
                    entity['headerRight'] = report;
                    tango = function() { // Original name: headerTitle
                        tango = _closure1_slot14;
                        options = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 33;
                        entity = verify[entity];
                        zulu = undefined;
                        entity = options.bind(zulu)(entity);
                        mike = entity.NavigatorHeader;
                        entity = {};
                        report = _closure2_slot6;
                        entity['title'] = report;
                        report = 30;
                        oscar = verify[report];
                        oscar = options.bind(zulu)(oscar);
                        golf = oscar.intl;
                        oscar = golf.string;
                        report = verify[report];
                        report = options.bind(zulu)(report);
                        report = report.t;
                        report = report.t94EHh;
                        report = oscar.bind(golf)(report);
                        entity['subtitle'] = report;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    entity['headerTitle'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            tango = romeo.bind(yankee)(tango, golf);
            golf = yankee.useLayoutEffect;
            tango = new Array(3);
            tango[0] = zulu;
            tango[1] = options;
            tango[2] = verify;
            zulu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure2_slot3;
                    tango = null;
                    if(!(tango == mike)) { _fun00016_ip = 139; continue _fun00015 }
 16:
                    zulu = _closure2_slot5;
                    mike = zulu.getState;
                    mike = mike.bind(zulu)();
                    zulu = mike.routes;
                    report = zulu.length;
                    mike = 1;
                    mike = report - mike;
                    report = zulu[mike];
                    golf = _closure1_slot8;
                    oscar = golf.getSubscriptionGroupListingsForGuildFetchState;
                    zulu = _closure2_slot0;
                    oscar = oscar.bind(golf)(zulu);
                    zulu = _closure1_slot9;
                    zulu = zulu.FETCHING;
                    zulu = oscar === zulu;
                    oscar = tango == report;
                    tango = undefined;
                    if(oscar) { _fun00016_ip = 102; continue _fun00015 }
 97:
                    tango = report.name;
 102:
                    mike = _closure1_slot12;
                    mike = mike.ROLE_SUBSCRIPTIONS_TIER_EDIT;
                    mike = tango !== mike;
                    if(mike) { _fun00016_ip = 122; continue _fun00015 }
 119:
                    mike = zulu;
 122:
                    if(mike) { _fun00016_ip = 139; continue _fun00015 }
 125:
                    mike = _closure2_slot5;
                    entity = mike.pop;
                    entity = entity.bind(mike)();
 139:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = golf.bind(yankee)(zulu, tango);
            kilo = _closure1_slot0;
            zulu = 35;
            zulu = result[zulu];
            golf = kilo.bind(report)(zulu);
            tango = golf.useSegmentedControlState;
            zulu = {};
            zulu['pageWidth'] = offset;
            offset = _closure1_slot19;
            offset = offset[sizing];
            zulu['defaultIndex'] = offset;
            offset = function(argFoo) { // Original name: onSetActiveIndex
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = _closure1_slot18;
                    entity = argFoo;
                    report = mike[entity];
                    entity = null;
                    if(!(entity != report)) { _fun00018_ip = 57; continue _fun00017 }
 20:
                    tango = _closure2_slot14;
                    zulu = undefined;
                    zulu = tango.bind(zulu)(report);
                    mike = _closure2_slot8;
                    mike = mike.current;
                    if(!(entity != mike)) { _fun00018_ip = 57; continue _fun00017 }
 47:
                    entity = mike.dismissError;
                    entity = entity.bind(mike)();
 57:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['onSetActiveIndex'] = offset;
            offset = 30;
            yankee = result[offset];
            yankee = kilo.bind(report)(yankee);
            backup = yankee.intl;
            romeo = backup.string;
            yankee = result[offset];
            yankee = kilo.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.f7rGur;
            yankee = romeo.bind(backup)(yankee);
            romeo = new Array(3);
            romeo[0] = yankee;
            yankee = result[offset];
            yankee = kilo.bind(report)(yankee);
            update = yankee.intl;
            backup = update.string;
            yankee = result[offset];
            yankee = kilo.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.YCpDtb;
            yankee = backup.bind(update)(yankee);
            romeo[1] = yankee;
            yankee = result[offset];
            yankee = kilo.bind(report)(yankee);
            backup = yankee.intl;
            yankee = backup.string;
            offset = result[offset];
            offset = kilo.bind(report)(offset);
            offset = offset.t;
            offset = offset.MpDNxM;
            offset = yankee.bind(backup)(offset);
            romeo[2] = offset;
            yankee = romeo.map;
            offset = function(argFoo) {
                mike = argFoo;
                entity = {};
                entity['id'] = mike;
                entity['label'] = mike;
                mike = null;
                entity['page'] = mike;
                return entity;
            };
            offset = yankee.bind(romeo)(offset);
            zulu['items'] = offset;
            update = tango.bind(golf)(zulu);
            if(!(entity != options)) { _fun00008_ip = 1228; continue _fun00007 }
 835:
            if(!(report !== mike)) { _fun00008_ip = 845; continue _fun00007 }
 839:
            result = new Array(0);
            _fun00008_ip = 888; continue _fun00007;
 845:
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 36;
            mike = tango[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.DismissibleContent;
            zulu = mike.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
            mike = new Array(1);
            mike[0] = zulu;
            result = mike;
 888:
            mike = function() { // Original name: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
                zulu = _closure1_slot0;
                entity = _closure1_slot3;
                mike = 38;
                mike = entity[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = 37;
                mike = entity[mike];
                entity = entity.paths;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            _closure2_slot15 = mike;
            tango = _closure1_slot14;
            golf = _closure1_slot0;
            vacuum = _closure1_slot3;
            mike = 13;
            mike = vacuum[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.EditStateContextProvider;
            mike = {};
            mike['guildId'] = verify;
            mike['editStateId'] = options;
            mike['groupListingId'] = oscar;
            options = _closure1_slot14;
            oscar = 26;
            oscar = vacuum[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.RoleSubscriptionSettingsDisabledContextProvider;
            oscar = {};
            oscar['guildId'] = verify;
            yankee = _closure1_slot16;
            offset = _closure1_slot6;
            verify = {};
            romeo = echo.container;
            verify['style'] = romeo;
            kilo = _closure1_slot14;
            backup = _closure1_slot1;
            romeo = 39;
            romeo = vacuum[romeo];
            backup = backup.bind(report)(romeo);
            romeo = {};
            romeo['contentTypes'] = result;
            output = function(argFoo) { // Original name: children
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    tango = entity.visibleContent;
                    entity = entity.markAsDismissed;
                    var _closure3_slot0 = entity;
                    zulu = _closure1_slot0;
                    report = _closure1_slot3;
                    entity = 36;
                    entity = report[entity];
                    report = undefined;
                    entity = zulu.bind(report)(entity);
                    entity = entity.DismissibleContent;
                    zulu = entity.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
                    entity = null;
                    if(!(tango === zulu)) { _fun00020_ip = 137; continue _fun00019 }
 64:
                    tango = _closure1_slot14;
                    zulu = _closure1_slot0;
                    golf = _closure1_slot3;
                    mike = 40;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.DismissibleActionSheet;
                    mike = {};
                    oscar = function() { // Original name: markAsDismissed
                        zulu = _closure3_slot0;
                        entity = _closure1_slot13;
                        mike = entity.UNKNOWN;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike['markAsDismissed'] = oscar;
                    oscar = 'TierTemplateSelected';
                    mike['actionSheetKey'] = oscar;
                    oscar = _closure2_slot15;
                    mike['importer'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 137:
                    return entity;
                }
            };
            romeo['children'] = output;
            backup = kilo.bind(report)(backup, romeo);
            romeo = new Array(3);
            romeo[0] = backup;
            kilo = _closure1_slot16;
            backup = {};
            result = echo.tabsContainer;
            output = new Array(2);
            output[0] = result;
            result = null;
            if(control) { _fun00008_ip = 1075; continue _fun00007 }
 1069:
            result = echo.tabsContainerWithDraft;
 1075:
            output[1] = result;
            backup['style'] = output;
            echo = _closure1_slot14;
            result = _closure1_slot0;
            control = _closure1_slot3;
            output = 41;
            output = control[output];
            output = result.bind(report)(output);
            result = output.SegmentedControl;
            output = {};
            output['state'] = update;
            result = echo.bind(report)(result, output);
            output = new Array(2);
            output[0] = result;
            update = _closure1_slot14;
            echo = _closure1_slot20;
            result = {};
            result['ref'] = source;
            result = update.bind(report)(echo, result);
            output[1] = result;
            backup['children'] = output;
            backup = kilo.bind(report)(offset, backup);
            romeo[1] = backup;
            kilo = _closure1_slot14;
            backup = _closure1_slot22;
            foxtrot = {};
            foxtrot['selectedTab'] = sizing;
            foxtrot = kilo.bind(report)(backup, foxtrot);
            romeo[2] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(report)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 1228:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();