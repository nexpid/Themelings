// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: ArchiveOrDeleteTierSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot17;
            tangon = undefined;
            kiloes = entity.bind(tangon)();
            var _closure2_slot0 = kiloes;
            option = _closure1_slot0;
            result = _closure1_slot3;
            entity = 12;
            entity = result[entity];
            michal = option.bind(tangon)(entity);
            entity = michal.useNavigation;
            source = entity.bind(michal)();
            entity = 13;
            entity = result[entity];
            michal = option.bind(tangon)(entity);
            entity = michal.useEditStateContext;
            entity = entity.bind(michal)();
            zuuluu = entity.guildId;
            vacuum = entity.groupListingId;
            ctrled = entity.editStateId;
            output = _closure1_slot1;
            entity = 14;
            entity = result[entity];
            entity = output.bind(tangon)(entity);
            config = undefined;
            sequen = zuuluu;
            entity = config[entity](sequen, vacuum, ctrled, source, update);
            verify = entity.buttonText;
            echoed = entity.descriptionText;
            foxtra = entity.handleArchiveOrDelete;
            romeon = entity.deleting;
            yankee = entity.archiving;
            entity = 15;
            entity = result[entity];
            michal = option.bind(tangon)(entity);
            entity = michal.useShouldRestrictUpdatingCreatorMonetizationSettings;
            entity = entity.bind(michal)(zuuluu);
            offset = entity.allowSelfRemoveMonetization;
            zuuluu = _closure1_slot16;
            michal = _closure1_slot15;
            entity = {};
            sizing = _closure1_slot14;
            report = 16;
            report = result[report];
            golfie = output.bind(tangon)(report);
            report = {};
            update = kiloes.actionHeader;
            report['style'] = update;
            report['children'] = verify;
            golfie = sizing.bind(tangon)(golfie, report);
            report = new Array(3);
            report[0] = golfie;
            sizing = _closure1_slot14;
            golfie = 17;
            golfie = result[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            update = kiloes.actionDescription;
            golfie['style'] = update;
            golfie['children'] = echoed;
            golfie = sizing.bind(tangon)(option, golfie);
            report[1] = golfie;
            option = _closure1_slot14;
            sizing = 18;
            oscard = result[sizing];
            golfie = output.bind(tangon)(oscard);
            oscard = {};
            sizing = result[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.Colors;
            sizing = sizing.RED;
            oscard['color'] = sizing;
            kiloes = kiloes.actionButton;
            oscard['style'] = kiloes;
            backup = function() { // Original name: renderIcon
                tangon = _closure1_slot14;
                oscard = _closure1_slot1;
                golfie = _closure1_slot3;
                report = 19;
                entity = golfie[report];
                zuuluu = undefined;
                michal = oscard.bind(zuuluu)(entity);
                entity = {};
                option = _closure2_slot0;
                option = option.actionButtonIcon;
                entity['style'] = option;
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                report = report.Sizes;
                report = report.SMALL;
                entity['size'] = report;
                report = true;
                entity['disableColor'] = report;
                report = 20;
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                entity['source'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            oscard['renderIcon'] = backup;
            oscard['onPress'] = foxtra;
            offset = !offset;
            if(offset) { _fun00002_ip = 367; continue _fun00001 }
 364:
            offset = romeon;
 367:
            if(offset) { _fun00002_ip = 373; continue _fun00001 }
 370:
            offset = yankee;
 373:
            oscard['disabled'] = offset;
            oscard['text'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: TabContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.selectedTab;
            entity = _closure1_slot17;
            tangon = undefined;
            report = entity.bind(tangon)();
            entity = _closure1_slot11;
            entity = entity.DETAILS;
            if(!(entity !== oscard)) { _fun00004_ip = 199; continue _fun00003 }
 39:
            entity = _closure1_slot11;
            entity = entity.DESIGN;
            if(!(entity !== oscard)) { _fun00004_ip = 159; continue _fun00003 }
 53:
            entity = _closure1_slot11;
            entity = entity.BENEFITS;
            if(!(entity !== oscard)) { _fun00004_ip = 119; continue _fun00003 }
 67:
            entity = global;
            zuuluu = entity.Error;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Unsupported scene: ';
            backup = michal.bind(entity)(oscard);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            kiloes = michal;
            entity = new kiloes[zuuluu](backup, foxtra);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 119:
            zuuluu = _closure1_slot14;
            michal = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 24;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.GuildRoleSubscriptionTierBenefitsTab;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 159:
            zuuluu = _closure1_slot14;
            michal = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 23;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.GuildRoleSubscriptionTierDesignTab;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 199:
            zuuluu = _closure1_slot14;
            michal = _closure1_slot7;
            entity = {};
            report = report.tabContent;
            entity['style'] = report;
            golfie = _closure1_slot16;
            offset = _closure1_slot0;
            romeon = _closure1_slot3;
            report = 21;
            report = romeon[report];
            report = offset.bind(tangon)(report);
            oscard = report.SafeAreaPaddingView;
            report = {};
            option = true;
            report['bottom'] = option;
            yankee = _closure1_slot14;
            option = 22;
            option = romeon[option];
            option = offset.bind(tangon)(option);
            offset = option.GuildRoleSubscriptionTierDetailsTab;
            option = {};
            offset = yankee.bind(tangon)(offset, option);
            option = new Array(2);
            option[0] = offset;
            yankee = _closure1_slot14;
            offset = _closure1_slot21;
            verify = {};
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    kiloes = 0;
    tangon = oscard[kiloes];
    entity = undefined;
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    sizing = 1;
    tangon = oscard[sizing];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = oscard[sizing];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.forwardRef;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.View;
    var _closure1_slot6 = verify;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    tangon = 3;
    verify = oscard[tangon];
    verify = foxtra.bind(entity)(verify);
    var _closure1_slot8 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot9 = tangon;
    backup = 4;
    tangon = oscard[backup];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot11 = tangon;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    romeon = option.Fonts;
    option = option.GuildSettingsSections;
    var _closure1_slot12 = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.ContentDismissActionType;
    var _closure1_slot13 = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.jsx;
    var _closure1_slot14 = verify;
    verify = option.Fragment;
    var _closure1_slot15 = verify;
    option = option.jsxs;
    var _closure1_slot16 = option;
    option = 9;
    option = oscard[option];
    offset = report.bind(entity)(option);
    verify = offset.createStyles;
    option = {};
    yankee = {};
    yankee['flex'] = sizing;
    option['container'] = yankee;
    yankee = {};
    sizing = 10;
    sizing = oscard[sizing];
    echoed = foxtra.bind(entity)(sizing);
    result = romeon.PRIMARY_SEMIBOLD;
    romeon = 11;
    sizing = oscard[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    output = sizing.TEXT_LINK;
    sizing = 16;
    source = echoed.bind(entity)(result, output, sizing);
    ctrled = yankee;
    output = copyDataProperties(ctrled, source);
    option['saveButtonLabel'] = yankee;
    yankee = {};
    output = oscard[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.BACKGROUND_SECONDARY;
    yankee['backgroundColor'] = output;
    yankee['padding'] = sizing;
    option['tabsContainer'] = yankee;
    yankee = {};
    yankee['paddingBottom'] = kiloes;
    option['tabsContainerWithDraft'] = yankee;
    yankee = {'alignSelf': 'stretch', 'margin': 16, 'marginTop': 0};
    option['actionButton'] = yankee;
    yankee = {};
    yankee['marginEnd'] = backup;
    option['actionButtonIcon'] = yankee;
    yankee = {};
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_PRIMARY;
    yankee['backgroundColor'] = romeon;
    option['tabContent'] = yankee;
    yankee = {'marginTop': 24, 'paddingStart': 16};
    option['actionHeader'] = yankee;
    yankee = {'marginBottom': 16, 'marginLeft': 16};
    option['actionDescription'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot17 = option;
    option = tangon.DETAILS;
    offset = new Array(3);
    offset[0] = option;
    option = tangon.DESIGN;
    offset[1] = option;
    tangon = tangon.BENEFITS;
    offset[2] = tangon;
    var _closure1_slot18 = offset;
    verify = offset.reduce;
    option = function(argFoo, argBar, argBaz) {
        entity = argFoo;
        zuuluu = argBaz;
        michal = argBar;
        entity[michal] = zuuluu;
        return entity;
    };
    tangon = {};
    tangon = verify.bind(offset)(option, tangon);
    var _closure1_slot19 = tangon;
    tangon = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            entity = 13;
            entity = report[entity];
            oscard = undefined;
            michal = tangon.bind(oscard)(entity);
            entity = michal.useEditStateContext;
            michal = entity.bind(michal)();
            entity = michal.guildId;
            var _closure2_slot0 = entity;
            entity = michal.groupListingId;
            var _closure2_slot1 = entity;
            verify = michal.editStateId;
            michal = 25;
            zuuluu = report[michal];
            golfie = tangon.bind(oscard)(zuuluu);
            zuuluu = golfie.usePublishSubscriptionListing;
            zuuluu = zuuluu.bind(golfie)();
            output = zuuluu.error;
            golfie = zuuluu.submitting;
            yankee = zuuluu.publishSubscriptionListing;
            var _closure2_slot2 = yankee;
            zuuluu = zuuluu.clearError;
            var _closure2_slot3 = zuuluu;
            michal = report[michal];
            zuuluu = tangon.bind(oscard)(michal);
            michal = zuuluu.useSubscriptionListing;
            zuuluu = michal.bind(zuuluu)(verify);
            var _closure2_slot4 = zuuluu;
            michal = 26;
            michal = report[michal];
            tangon = tangon.bind(oscard)(michal);
            michal = tangon.useRoleSubscriptionSettingsDisabled;
            report = michal.bind(tangon)();
            yankee = _closure1_slot5;
            verify = yankee.useImperativeHandle;
            tangon = argBar;
            michal = function() {
                entity = {};
                michal = _closure2_slot3;
                entity['dismissError'] = michal;
                return entity;
            };
            michal = verify.bind(yankee)(tangon, michal);
            michal = null;
            tangon = michal == entity;
            entity = null;
            if(tangon) { _fun00006_ip = 541; continue _fun00005 }
 201:
            tangon = michal == zuuluu;
            entity = null;
            if(tangon) { _fun00006_ip = 541; continue _fun00005 }
 213:
            zuuluu = zuuluu.published;
            entity = null;
            if(zuuluu) { _fun00006_ip = 541; continue _fun00005 }
 227:
            if(!(michal == output)) { _fun00006_ip = 400; continue _fun00005 }
 234:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot1;
            backup = _closure1_slot3;
            michal = 29;
            michal = backup[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = {};
            foxtra = _closure1_slot0;
            verify = 30;
            yankee = backup[verify];
            yankee = foxtra.bind(oscard)(yankee);
            kiloes = yankee.intl;
            romeon = kiloes.string;
            yankee = backup[verify];
            yankee = foxtra.bind(oscard)(yankee);
            yankee = yankee.t;
            yankee = yankee.V5mSp6;
            yankee = romeon.bind(kiloes)(yankee);
            michal['message'] = yankee;
            yankee = backup[verify];
            yankee = foxtra.bind(oscard)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.Lj6R5u;
            verify = yankee.bind(romeon)(verify);
            michal['ctaMessage'] = verify;
            option = function() { // Original name: onClick
                zuuluu = _closure2_slot2;
                michal = {};
                tangon = _closure2_slot0;
                michal['guildId'] = tangon;
                tangon = _closure2_slot1;
                michal['groupListingId'] = tangon;
                entity = _closure2_slot4;
                entity = entity.id;
                michal['listingId'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onClick'] = option;
            michal['submitting'] = golfie;
            michal['disabled'] = report;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00006_ip = 538; continue _fun00005;
 400:
            report = _closure1_slot16;
            tangon = _closure1_slot15;
            zuuluu = {};
            backup = _closure1_slot14;
            verify = _closure1_slot1;
            romeon = _closure1_slot3;
            option = 27;
            golfie = romeon[option];
            foxtra = verify.bind(oscard)(golfie);
            golfie = {};
            yankee = 16;
            golfie['size'] = yankee;
            foxtra = backup.bind(oscard)(foxtra, golfie);
            golfie = new Array(3);
            golfie[0] = foxtra;
            kiloes = _closure1_slot14;
            foxtra = 28;
            foxtra = romeon[foxtra];
            backup = verify.bind(oscard)(foxtra);
            foxtra = {};
            sizing = output.getAnyErrorMessage;
            sizing = sizing.bind(output)();
            foxtra['children'] = sizing;
            foxtra = kiloes.bind(oscard)(backup, foxtra);
            golfie[1] = foxtra;
            offset = _closure1_slot14;
            option = romeon[option];
            verify = verify.bind(oscard)(option);
            option = {};
            option['size'] = yankee;
            option = offset.bind(oscard)(verify, option);
            golfie[2] = option;
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 538:
            entity = michal;
 541:
            return entity;
        }
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 42;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildSettingsRoleSubscriptionTierEdit
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            var _closure2_slot0 = verify;
            zuuluu = entity.initialEditStateId;
            oscard = entity.groupListingId;
            var _closure2_slot1 = oscard;
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
            echoed = entity.bind(report)();
            michal = _closure1_slot5;
            entity = michal.useState;
            entity = entity.bind(michal)(zuuluu);
            tangon = _closure1_slot4;
            vacuum = 2;
            entity = tangon.bind(report)(entity, vacuum);
            offset = 0;
            option = entity[offset];
            var _closure2_slot3 = option;
            romeon = 1;
            entity = entity[romeon];
            var _closure2_slot4 = entity;
            golfie = _closure1_slot0;
            entity = _closure1_slot3;
            michal = 12;
            michal = entity[michal];
            zuuluu = golfie.bind(report)(michal);
            michal = zuuluu.useNavigation;
            zuuluu = michal.bind(zuuluu)();
            var _closure2_slot5 = zuuluu;
            michal = 25;
            michal = entity[michal];
            golfie = golfie.bind(report)(michal);
            michal = golfie.useSubscriptionListing;
            michal = michal.bind(golfie)(option);
            yankee = _closure1_slot2;
            golfie = 31;
            entity = entity[golfie];
            yankee = yankee.bind(report)(entity);
            entity = yankee.useName;
            entity = entity.bind(yankee)(option);
            entity = tangon.bind(report)(entity, romeon);
            kiloes = entity[offset];
            var _closure2_slot6 = kiloes;
            entity = null;
            yankee = entity == michal;
            tangon = undefined;
            if(yankee) { _fun00008_ip = 252; continue _fun00007 }
 246:
            tangon = michal.published;
 252:
            ctrled = entity != tangon;
            if(!ctrled) { _fun00008_ip = 262; continue _fun00007 }
 259:
            ctrled = tangon;
 262:
            backup = _closure1_slot2;
            result = _closure1_slot3;
            tangon = result[golfie];
            yankee = backup.bind(report)(tangon);
            tangon = yankee.useEditStateIds;
            tangon = tangon.bind(yankee)(oscard, verify);
            tangon = tangon.removeEditStateId;
            _closure2_slot7 = tangon;
            yankee = _closure1_slot5;
            sizing = yankee.useRef;
            source = sizing.bind(yankee)(entity);
            _closure2_slot8 = source;
            sizing = result[golfie];
            update = backup.bind(report)(sizing);
            sizing = update.useHasChanges;
            update = sizing.bind(update)(option);
            _closure2_slot9 = update;
            golfie = result[golfie];
            backup = backup.bind(report)(golfie);
            golfie = backup.useCreateOrUpdateListingFromEditState;
            golfie = golfie.bind(backup)();
            backup = golfie.loading;
            _closure2_slot10 = backup;
            record = golfie.handleCreateOrUpdateFromEditState;
            _closure2_slot11 = record;
            golfie = golfie.error;
            _closure2_slot12 = golfie;
            sequen = yankee.useCallback;
            sizing = new Array(6);
            sizing[0] = verify;
            sizing[1] = record;
            sizing[2] = option;
            sizing[3] = oscard;
            sizing[4] = config;
            sizing[5] = tangon;
            tangon = function() {
                zuuluu = _closure2_slot11;
                michal = {};
                tangon = _closure2_slot0;
                michal['guildId'] = tangon;
                tangon = _closure2_slot3;
                michal['editStateId'] = tangon;
                tangon = _closure2_slot1;
                michal['groupListingId'] = tangon;
                entity = _closure2_slot2;
                michal['onBeforeDispatchNewListing'] = entity;
                entity = function(argFoo) { // Original name: onAfterDispatchNewListing
                    tangon = _closure2_slot4;
                    entity = argFoo;
                    zuuluu = entity.id;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = _closure2_slot7;
                    michal = _closure2_slot3;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal['onAfterDispatchNewListing'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon = sequen.bind(yankee)(tangon, sizing);
            _closure2_slot13 = tangon;
            sequen = yankee.useLayoutEffect;
            sizing = new Array(1);
            sizing[0] = golfie;
            golfie = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot12;
                    report = null;
                    if(!(report != michal)) { _fun00010_ip = 122; continue _fun00009 }
 13:
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot3;
                    michal = 32;
                    michal = oscard[michal];
                    option = undefined;
                    zuuluu = zuuluu.bind(option)(michal);
                    michal = zuuluu.presentError;
                    oscard = _closure2_slot12;
                    entity = oscard.getAnyErrorMessage;
                    entity = entity.bind(oscard)();
                    if(!(report == entity)) { _fun00010_ip = 117; continue _fun00009 }
 62:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot3;
                    tangon = 30;
                    report = verify[tangon];
                    report = golfie.bind(option)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = golfie.bind(option)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.R0RpRU;
                    entity = report.bind(oscard)(tangon);
 117:
                    entity = michal.bind(zuuluu)(entity);
 122:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = sequen.bind(yankee)(golfie, sizing);
            sequen = _closure1_slot10;
            sizing = sequen.useRoleTierEditStore;
            golfie = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.currentScene;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00012_ip = 28; continue _fun00011 }
 15:
                    entity = _closure1_slot11;
                    zuuluu = entity.DETAILS;
 28:
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    michal = michal.setScene;
                    entity[1] = michal;
                    return entity;
                }
            };
            sizing = sizing.bind(sequen)(golfie);
            golfie = _closure1_slot4;
            golfie = golfie.bind(report)(sizing, vacuum);
            sizing = golfie[offset];
            golfie = golfie[romeon];
            _closure2_slot14 = golfie;
            romeon = yankee.useLayoutEffect;
            golfie = new Array(5);
            golfie[0] = zuuluu;
            golfie[1] = update;
            golfie[2] = kiloes;
            golfie[3] = backup;
            golfie[4] = tangon;
            tangon = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.setOptions;
                    entity = {};
                    report = _closure2_slot10;
                    if(report) { _fun00014_ip = 33; continue _fun00013 }
 24:
                    report = function() {
                        tangon = _closure1_slot14;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 34;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        report = 30;
                        oscard = verify[report];
                        oscard = option.bind(zuuluu)(oscard);
                        golfie = oscard.intl;
                        oscard = golfie.string;
                        report = verify[report];
                        report = option.bind(zuuluu)(report);
                        report = report.t;
                        report = report.R3BPHx;
                        report = oscard.bind(golfie)(report);
                        entity['text'] = report;
                        oscard = _closure2_slot13;
                        entity['onPress'] = oscard;
                        report = _closure2_slot9;
                        report = !report;
                        entity['disabled'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    _fun00014_ip = 40; continue _fun00013;
 33:
                    report = function() {
                        tangon = _closure1_slot14;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        entity = 33;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.HeaderSubmittingIndicator;
                        entity = {};
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
 40:
                    entity['headerRight'] = report;
                    tangon = function() { // Original name: headerTitle
                        tangon = _closure1_slot14;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 33;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.NavigatorHeader;
                        entity = {};
                        report = _closure2_slot6;
                        entity['title'] = report;
                        report = 30;
                        oscard = verify[report];
                        oscard = option.bind(zuuluu)(oscard);
                        golfie = oscard.intl;
                        oscard = golfie.string;
                        report = verify[report];
                        report = option.bind(zuuluu)(report);
                        report = report.t;
                        report = report.t94EHh;
                        report = oscard.bind(golfie)(report);
                        entity['subtitle'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    entity['headerTitle'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            tangon = romeon.bind(yankee)(tangon, golfie);
            golfie = yankee.useLayoutEffect;
            tangon = new Array(3);
            tangon[0] = zuuluu;
            tangon[1] = option;
            tangon[2] = verify;
            zuuluu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot3;
                    tangon = null;
                    if(!(tangon == michal)) { _fun00016_ip = 139; continue _fun00015 }
 16:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.getState;
                    michal = michal.bind(zuuluu)();
                    zuuluu = michal.routes;
                    report = zuuluu.length;
                    michal = 1;
                    michal = report - michal;
                    report = zuuluu[michal];
                    golfie = _closure1_slot8;
                    oscard = golfie.getSubscriptionGroupListingsForGuildFetchState;
                    zuuluu = _closure2_slot0;
                    oscard = oscard.bind(golfie)(zuuluu);
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.FETCHING;
                    zuuluu = oscard === zuuluu;
                    oscard = tangon == report;
                    tangon = undefined;
                    if(oscard) { _fun00016_ip = 102; continue _fun00015 }
 97:
                    tangon = report.name;
 102:
                    michal = _closure1_slot12;
                    michal = michal.ROLE_SUBSCRIPTIONS_TIER_EDIT;
                    michal = tangon !== michal;
                    if(michal) { _fun00016_ip = 122; continue _fun00015 }
 119:
                    michal = zuuluu;
 122:
                    if(michal) { _fun00016_ip = 139; continue _fun00015 }
 125:
                    michal = _closure2_slot5;
                    entity = michal.pop;
                    entity = entity.bind(michal)();
 139:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(yankee)(zuuluu, tangon);
            kiloes = _closure1_slot0;
            zuuluu = 35;
            zuuluu = result[zuuluu];
            golfie = kiloes.bind(report)(zuuluu);
            tangon = golfie.useSegmentedControlState;
            zuuluu = {};
            zuuluu['pageWidth'] = offset;
            offset = _closure1_slot19;
            offset = offset[sizing];
            zuuluu['defaultIndex'] = offset;
            offset = function(argFoo) { // Original name: onSetActiveIndex
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure1_slot18;
                    entity = argFoo;
                    report = michal[entity];
                    entity = null;
                    if(!(entity != report)) { _fun00018_ip = 57; continue _fun00017 }
 20:
                    tangon = _closure2_slot14;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)(report);
                    michal = _closure2_slot8;
                    michal = michal.current;
                    if(!(entity != michal)) { _fun00018_ip = 57; continue _fun00017 }
 47:
                    entity = michal.dismissError;
                    entity = entity.bind(michal)();
 57:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['onSetActiveIndex'] = offset;
            offset = 30;
            yankee = result[offset];
            yankee = kiloes.bind(report)(yankee);
            backup = yankee.intl;
            romeon = backup.string;
            yankee = result[offset];
            yankee = kiloes.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.f7rGur;
            yankee = romeon.bind(backup)(yankee);
            romeon = new Array(3);
            romeon[0] = yankee;
            yankee = result[offset];
            yankee = kiloes.bind(report)(yankee);
            update = yankee.intl;
            backup = update.string;
            yankee = result[offset];
            yankee = kiloes.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.YCpDtb;
            yankee = backup.bind(update)(yankee);
            romeon[1] = yankee;
            yankee = result[offset];
            yankee = kiloes.bind(report)(yankee);
            backup = yankee.intl;
            yankee = backup.string;
            offset = result[offset];
            offset = kiloes.bind(report)(offset);
            offset = offset.t;
            offset = offset.MpDNxM;
            offset = yankee.bind(backup)(offset);
            romeon[2] = offset;
            yankee = romeon.map;
            offset = function(argFoo) {
                michal = argFoo;
                entity = {};
                entity['id'] = michal;
                entity['label'] = michal;
                michal = null;
                entity['page'] = michal;
                return entity;
            };
            offset = yankee.bind(romeon)(offset);
            zuuluu['items'] = offset;
            update = tangon.bind(golfie)(zuuluu);
            if(!(entity != option)) { _fun00008_ip = 1228; continue _fun00007 }
 835:
            if(!(report !== michal)) { _fun00008_ip = 845; continue _fun00007 }
 839:
            result = new Array(0);
            _fun00008_ip = 888; continue _fun00007;
 845:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            michal = 36;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
            michal = new Array(1);
            michal[0] = zuuluu;
            result = michal;
 888:
            michal = function() { // Original name: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
                zuuluu = _closure1_slot0;
                entity = _closure1_slot3;
                michal = 38;
                michal = entity[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 37;
                michal = entity[michal];
                entity = entity.paths;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            _closure2_slot15 = michal;
            tangon = _closure1_slot14;
            golfie = _closure1_slot0;
            vacuum = _closure1_slot3;
            michal = 13;
            michal = vacuum[michal];
            michal = golfie.bind(report)(michal);
            zuuluu = michal.EditStateContextProvider;
            michal = {};
            michal['guildId'] = verify;
            michal['editStateId'] = option;
            michal['groupListingId'] = oscard;
            option = _closure1_slot14;
            oscard = 26;
            oscard = vacuum[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.RoleSubscriptionSettingsDisabledContextProvider;
            oscard = {};
            oscard['guildId'] = verify;
            yankee = _closure1_slot16;
            offset = _closure1_slot6;
            verify = {};
            romeon = echoed.container;
            verify['style'] = romeon;
            kiloes = _closure1_slot14;
            backup = _closure1_slot1;
            romeon = 39;
            romeon = vacuum[romeon];
            backup = backup.bind(report)(romeon);
            romeon = {};
            romeon['contentTypes'] = result;
            output = function(argFoo) { // Original name: children
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.visibleContent;
                    entity = entity.markAsDismissed;
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot3;
                    entity = 36;
                    entity = report[entity];
                    report = undefined;
                    entity = zuuluu.bind(report)(entity);
                    entity = entity.DismissibleContent;
                    zuuluu = entity.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
                    entity = null;
                    if(!(tangon === zuuluu)) { _fun00020_ip = 137; continue _fun00019 }
 64:
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot3;
                    michal = 40;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.DismissibleActionSheet;
                    michal = {};
                    oscard = function() { // Original name: markAsDismissed
                        zuuluu = _closure3_slot0;
                        entity = _closure1_slot13;
                        michal = entity.UNKNOWN;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal['markAsDismissed'] = oscard;
                    oscard = 'TierTemplateSelected';
                    michal['actionSheetKey'] = oscard;
                    oscard = _closure2_slot15;
                    michal['importer'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 137:
                    return entity;
                }
            };
            romeon['children'] = output;
            backup = kiloes.bind(report)(backup, romeon);
            romeon = new Array(3);
            romeon[0] = backup;
            kiloes = _closure1_slot16;
            backup = {};
            result = echoed.tabsContainer;
            output = new Array(2);
            output[0] = result;
            result = null;
            if(ctrled) { _fun00008_ip = 1075; continue _fun00007 }
 1069:
            result = echoed.tabsContainerWithDraft;
 1075:
            output[1] = result;
            backup['style'] = output;
            echoed = _closure1_slot14;
            result = _closure1_slot0;
            ctrled = _closure1_slot3;
            output = 41;
            output = ctrled[output];
            output = result.bind(report)(output);
            result = output.SegmentedControl;
            output = {};
            output['state'] = update;
            result = echoed.bind(report)(result, output);
            output = new Array(2);
            output[0] = result;
            update = _closure1_slot14;
            echoed = _closure1_slot20;
            result = {};
            result['ref'] = source;
            result = update.bind(report)(echoed, result);
            output[1] = result;
            backup['children'] = output;
            backup = kiloes.bind(report)(offset, backup);
            romeon[1] = backup;
            kiloes = _closure1_slot14;
            backup = _closure1_slot22;
            foxtra = {};
            foxtra['selectedTab'] = sizing;
            foxtra = kiloes.bind(report)(backup, foxtra);
            romeon[2] = foxtra;
            verify['children'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1228:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();