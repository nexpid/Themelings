// app/modules/guild_settings/native/GuildSettingsModalCommunity.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.calculateLocaleOptions;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ChannelTypes;
    var _closure1_slot12 = golf;
    golf = tango.GuildFeatures;
    var _closure1_slot13 = golf;
    golf = tango.GuildSettingsSections;
    var _closure1_slot14 = golf;
    tango = tango.Permissions;
    var _closure1_slot15 = tango;
    tango = 9;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot16 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot17 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot18 = tango;
    tango = 10;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    tango['overview'] = verify;
    verify = {'marginTop': 24, 'marginBottom': 0};
    tango['formCTAButton'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot19 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/GuildSettingsModalCommunity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildSettingsModalCommunity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            var _closure2_slot0 = mike;
            zulu = entity.onClose;
            var _closure2_slot1 = zulu;
            report = undefined;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            entity = _closure1_slot19;
            verify = entity.bind(report)();
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 11;
            entity = golf[entity];
            tango = oscar.bind(report)(entity);
            entity = tango.useNavigation;
            kilo = entity.bind(tango)();
            var _closure2_slot2 = kilo;
            tango = 12;
            entity = golf[tango];
            yankee = oscar.bind(report)(entity);
            offset = yankee.useStateFromStoresObject;
            entity = _closure1_slot10;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                mike = _closure1_slot10;
                entity = mike.getProps;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = offset.bind(yankee)(options, entity);
            foxtrot = entity.submitting;
            var _closure2_slot3 = foxtrot;
            options = entity.hasChanges;
            var _closure2_slot4 = options;
            entity = entity.guild;
            var _closure2_slot5 = entity;
            offset = golf[tango];
            output = oscar.bind(report)(offset);
            sizing = output.useStateFromStoresObject;
            offset = _closure1_slot7;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot5;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun00004_ip = 51; continue _fun00003 }
 18:
                    options = _closure1_slot7;
                    golf = options.can;
                    report = _closure1_slot15;
                    oscar = report.MANAGE_GUILD;
                    report = _closure2_slot5;
                    mike = golf.bind(options)(oscar, report);
 51:
                    entity['canManage'] = mike;
                    mike = _closure2_slot5;
                    mike = tango != mike;
                    if(!mike) { _fun00004_ip = 100; continue _fun00003 }
 67:
                    oscar = _closure1_slot7;
                    report = oscar.can;
                    tango = _closure1_slot15;
                    tango = tango.ADMINISTRATOR;
                    zulu = _closure2_slot5;
                    mike = report.bind(oscar)(tango, zulu);
 100:
                    entity['isAdmin'] = mike;
                    return entity;
                }
            };
            offset = sizing.bind(output)(yankee, offset);
            target = offset.canManage;
            var _closure2_slot6 = target;
            yankee = offset.isAdmin;
            tango = golf[tango];
            output = oscar.bind(report)(tango);
            sizing = output.useStateFromStoresObject;
            tango = _closure1_slot4;
            offset = new Array(1);
            offset[0] = tango;
            tango = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    options = _closure1_slot4;
                    oscar = options.getChannel;
                    zulu = _closure2_slot5;
                    golf = null;
                    verify = golf == zulu;
                    zulu = undefined;
                    if(verify) { _fun00006_ip = 42; continue _fun00005 }
 32:
                    verify = _closure2_slot5;
                    zulu = verify.rulesChannelId;
 42:
                    zulu = oscar.bind(options)(zulu);
                    entity['rulesChannel'] = zulu;
                    zulu = _closure1_slot4;
                    mike = zulu.getChannel;
                    oscar = _closure2_slot5;
                    oscar = golf == oscar;
                    tango = undefined;
                    if(oscar) { _fun00006_ip = 84; continue _fun00005 }
 74:
                    report = _closure2_slot5;
                    tango = report.publicUpdatesChannelId;
 84:
                    mike = mike.bind(zulu)(tango);
                    entity['publicUpdatesChannel'] = mike;
                    return entity;
                }
            };
            tango = sizing.bind(output)(offset, tango);
            record = tango.rulesChannel;
            var _closure2_slot7 = record;
            control = tango.publicUpdatesChannel;
            var _closure2_slot8 = control;
            output = _closure1_slot3;
            sizing = output.useEffect;
            offset = new Array(3);
            offset[0] = entity;
            offset[1] = kilo;
            offset[2] = zulu;
            tango = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot5;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00008_ip = 49; continue _fun00007 }
 16:
                    mike = _closure2_slot5;
                    tango = mike.features;
                    zulu = tango.has;
                    mike = _closure1_slot13;
                    mike = mike.COMMUNITY;
                    entity = zulu.bind(tango)(mike);
 49:
                    if(entity) { _fun00008_ip = 130; continue _fun00007 }
 52:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.setSection;
                    entity = _closure1_slot14;
                    mike = entity.COMMUNITY_INTRO;
                    mike = zulu.bind(tango)(mike);
                    tango = _closure2_slot2;
                    zulu = tango.replace;
                    mike = entity.COMMUNITY_INTRO;
                    entity = {};
                    report = _closure2_slot1;
                    entity['onClose'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 130:
                    entity = undefined;
                    return entity;
                }
            };
            tango = sizing.bind(output)(tango, offset);
            sizing = output.useCallback;
            offset = new Array(1);
            offset[0] = entity;
            tango = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot5;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 159; continue _fun00009 }
 16:
                    mike = global;
                    zulu = mike.Set;
                    report = _closure2_slot5;
                    options = report.features;
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    verify = mike;
                    entity = new verify[zulu](options, golf);
                    oscar = entity instanceof Object ? entity : mike;
                    tango = oscar.delete;
                    mike = _closure1_slot13;
                    zulu = mike.COMMUNITY;
                    zulu = tango.bind(oscar)(zulu);
                    zulu = oscar.delete;
                    mike = mike.DISCOVERABLE;
                    mike = zulu.bind(oscar)(mike);
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.saveGuild;
                    mike = report.id;
                    entity = {'features': null, 'rulesChannelId': null, 'publicUpdatesChannelId': null};
                    entity['features'] = oscar;
                    report = report.preferredLocale;
                    entity['preferredLocale'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 159:
                    entity = undefined;
                    return entity;
                }
            };
            config = sizing.bind(output)(tango, offset);
            tango = 14;
            tango = golf[tango];
            golf = oscar.bind(report)(tango);
            oscar = golf.useMemberVerificationRolloutEnabled;
            tango = 'GuildSettingsModalCommunity';
            tango = oscar.bind(golf)(mike, tango);
            offset = null;
            vacuum = offset != entity;
            if(!vacuum) { _fun00002_ip = 409; continue _fun00001 }
 374:
            if(tango) { _fun00002_ip = 406; continue _fun00001 }
 377:
            sizing = entity.features;
            golf = sizing.has;
            oscar = _closure1_slot13;
            oscar = oscar.MEMBER_VERIFICATION_GATE_ENABLED;
            oscar = golf.bind(sizing)(oscar);
            tango = !oscar;
 406:
            vacuum = tango;
 409:
            sizing = _closure1_slot0;
            tango = _closure1_slot2;
            sequence = 15;
            oscar = tango[sequence];
            oscar = sizing.bind(report)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            tango = tango[sequence];
            tango = sizing.bind(report)(tango);
            tango = tango.t;
            if(vacuum) { _fun00002_ip = 471; continue _fun00001 }
 456:
            sizing = tango.kQzUNj;
            result = oscar.bind(golf)(sizing);
            _fun00002_ip = 484; continue _fun00001;
 471:
            tango = tango.aQzVFx;
            result = oscar.bind(golf)(tango);
 484:
            oscar = _closure1_slot3;
            golf = oscar.useEffect;
            tango = new Array(5);
            tango[0] = entity;
            tango[1] = kilo;
            tango[2] = foxtrot;
            tango[3] = options;
            tango[4] = zulu;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = function() { // Original name: handlePublicCancelChanges
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            mike = _closure2_slot5;
                            zulu = null;
                            if(!(zulu != mike)) { _fun00014_ip = 58; continue _fun00013 }
 13:
                            report = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 13;
                            tango = tango[mike];
                            mike = undefined;
                            report = report.bind(mike)(tango);
                            tango = report.cancelChanges;
                            mike = _closure2_slot5;
                            mike = mike.id;
                            mike = tango.bind(report)(mike);
 58:
                            mike = _closure2_slot1;
                            if(!(zulu != mike)) { _fun00014_ip = 76; continue _fun00013 }
 66:
                            mike = _closure2_slot1;
                            entity = undefined;
                            entity = mike.bind(entity)();
 76:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot0 = entity;
                    entity = function() { // Original name: handlePublicSaveChanges
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zulu = _closure2_slot5;
                            mike = null;
                            if(!(mike != zulu)) { _fun00016_ip = 116; continue _fun00015 }
 13:
                            entity = _closure2_slot5;
                            tango = entity.id;
                            verify = entity.rulesChannelId;
                            golf = entity.publicUpdatesChannelId;
                            oscar = entity.preferredLocale;
                            report = entity.features;
                            options = entity.safetyAlertsChannelId;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 13;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.saveGuild;
                            entity = {};
                            entity['rulesChannelId'] = verify;
                            entity['safetyAlertsChannelId'] = options;
                            entity['publicUpdatesChannelId'] = golf;
                            entity['preferredLocale'] = oscar;
                            entity['features'] = report;
                            entity = mike.bind(zulu)(tango, entity);
 116:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = entity;
                    zulu = _closure2_slot2;
                    mike = zulu.setOptions;
                    entity = {};
                    oscar = _closure2_slot3;
                    if(oscar) { _fun00012_ip = 64; continue _fun00011 }
 46:
                    golf = _closure2_slot4;
                    oscar = undefined;
                    if(!golf) { _fun00012_ip = 62; continue _fun00011 }
 55:
                    oscar = function() {
                        tango = _closure1_slot16;
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 16;
                        entity = verify[entity];
                        zulu = undefined;
                        entity = options.bind(zulu)(entity);
                        mike = entity.HeaderActionButton;
                        entity = {};
                        report = _closure3_slot0;
                        entity['onPress'] = report;
                        report = 15;
                        oscar = verify[report];
                        oscar = options.bind(zulu)(oscar);
                        golf = oscar.intl;
                        oscar = golf.string;
                        report = verify[report];
                        report = options.bind(zulu)(report);
                        report = report.t;
                        report = report.ETE/oK;
                        report = oscar.bind(golf)(report);
                        entity['text'] = report;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
 62:
                    _fun00012_ip = 71; continue _fun00011;
 64:
                    oscar = function() {
                        entity = null;
                        return entity;
                    };
 71:
                    entity['headerLeft'] = oscar;
                    oscar = _closure2_slot3;
                    if(oscar) { _fun00012_ip = 101; continue _fun00011 }
 83:
                    oscar = _closure2_slot4;
                    tango = undefined;
                    if(!oscar) { _fun00012_ip = 99; continue _fun00011 }
 92:
                    tango = function() {
                        tango = _closure1_slot16;
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 16;
                        entity = verify[entity];
                        zulu = undefined;
                        entity = options.bind(zulu)(entity);
                        mike = entity.HeaderActionButton;
                        entity = {};
                        report = _closure3_slot1;
                        entity['onPress'] = report;
                        report = 15;
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
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
 99:
                    _fun00012_ip = 108; continue _fun00011;
 101:
                    tango = function() {
                        tango = _closure1_slot16;
                        mike = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 17;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.HeaderSubmittingIndicator;
                        entity = {};
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
 108:
                    entity['headerRight'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            zulu = golf.bind(oscar)(zulu, tango);
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = _closure1_slot5;
                    tango = report.getChannels;
                    entity = _closure2_slot0;
                    tango = tango.bind(report)(entity);
                    entity = new Array(0);
                    report = null;
                    if(!(report != tango)) { _fun00018_ip = 79; continue _fun00017 }
 37:
                    zulu = _closure1_slot6;
                    report = tango[zulu];
                    tango = report.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.channel;
                        mike = entity.type;
                        entity = _closure1_slot12;
                        entity = entity.GUILD_TEXT;
                        entity = mike === entity;
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        golf = entity.channel;
                        entity = {};
                        mike = golf.id;
                        entity['value'] = mike;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 18;
                        tango = tango[zulu];
                        zulu = undefined;
                        oscar = report.bind(zulu)(tango);
                        report = oscar.computeChannelName;
                        offset = _closure1_slot9;
                        verify = _closure1_slot8;
                        options = true;
                        romeo = oscar;
                        yankee = golf;
                        mike = romeo[report](yankee, offset, verify, options, golf);
                        entity['label'] = mike;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 79:
                    return entity;
                }
            };
            mike = tango.bind(oscar)(mike, zulu);
            _closure2_slot9 = mike;
            golf = oscar.useCallback;
            tango = new Array(2);
            tango[0] = mike;
            tango[1] = record;
            zulu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 19;
                    zulu = offset[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.openLazy;
                    verify = _closure1_slot0;
                    mike = 21;
                    mike = offset[mike];
                    tango = verify.bind(entity)(mike);
                    mike = 20;
                    zulu = offset[mike];
                    mike = offset.paths;
                    tango = tango.bind(entity)(zulu, mike);
                    zulu = {};
                    mike = 15;
                    golf = offset[mike];
                    golf = verify.bind(entity)(golf);
                    options = golf.intl;
                    golf = options.string;
                    mike = offset[mike];
                    mike = verify.bind(entity)(mike);
                    mike = mike.t;
                    mike = mike.Yr6nGx;
                    mike = golf.bind(options)(mike);
                    zulu['title'] = mike;
                    mike = _closure2_slot9;
                    mike = mike.bind(entity)();
                    zulu['items'] = mike;
                    mike = function(argFoo) { // Original name: onItemSelect
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 13;
                        mike = tango[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        report = oscar.updateGuild;
                        mike = {};
                        golf = argFoo;
                        mike['rulesChannelId'] = golf;
                        mike = report.bind(oscar)(mike);
                        mike = 19;
                        mike = tango[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hideActionSheet;
                        mike = mike.bind(zulu)();
                        return entity;
                    };
                    zulu['onItemSelect'] = mike;
                    options = _closure2_slot7;
                    mike = null;
                    options = mike == options;
                    mike = undefined;
                    if(options) { _fun00020_ip = 172; continue _fun00019 }
 163:
                    golf = _closure2_slot7;
                    mike = golf.id;
 172:
                    zulu['selectedItem'] = mike;
                    mike = 'SelectRulesChannel';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            update = golf.bind(oscar)(zulu, tango);
            tango = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = mike;
            zulu[1] = control;
            mike = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 19;
                    zulu = offset[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.openLazy;
                    verify = _closure1_slot0;
                    mike = 21;
                    mike = offset[mike];
                    tango = verify.bind(entity)(mike);
                    mike = 20;
                    zulu = offset[mike];
                    mike = offset.paths;
                    tango = tango.bind(entity)(zulu, mike);
                    zulu = {};
                    mike = 15;
                    golf = offset[mike];
                    golf = verify.bind(entity)(golf);
                    options = golf.intl;
                    golf = options.string;
                    mike = offset[mike];
                    mike = verify.bind(entity)(mike);
                    mike = mike.t;
                    mike = mike.VqhxxM;
                    mike = golf.bind(options)(mike);
                    zulu['title'] = mike;
                    mike = _closure2_slot9;
                    mike = mike.bind(entity)();
                    zulu['items'] = mike;
                    mike = function(argFoo) { // Original name: onItemSelect
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 13;
                        mike = tango[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        report = oscar.updateGuild;
                        mike = {};
                        golf = argFoo;
                        mike['publicUpdatesChannelId'] = golf;
                        mike = report.bind(oscar)(mike);
                        mike = 19;
                        mike = tango[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hideActionSheet;
                        mike = mike.bind(zulu)();
                        return entity;
                    };
                    zulu['onItemSelect'] = mike;
                    options = _closure2_slot8;
                    mike = null;
                    options = mike == options;
                    mike = undefined;
                    if(options) { _fun00022_ip = 172; continue _fun00021 }
 163:
                    golf = _closure2_slot8;
                    mike = golf.id;
 172:
                    zulu['selectedItem'] = mike;
                    mike = 'SelectUpdatesChannel';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            source = tango.bind(oscar)(mike, zulu);
            zulu = offset == entity;
            mike = undefined;
            if(zulu) { _fun00002_ip = 635; continue _fun00001 }
 629:
            mike = entity.preferredLocale;
 635:
            _closure2_slot10 = mike;
            oscar = _closure1_slot3;
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot1;
                yankee = _closure1_slot2;
                entity = 19;
                zulu = yankee[entity];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                report = oscar.openLazy;
                offset = _closure1_slot0;
                zulu = 21;
                zulu = yankee[zulu];
                golf = offset.bind(entity)(zulu);
                zulu = 20;
                tango = yankee[zulu];
                zulu = yankee.paths;
                tango = golf.bind(entity)(tango, zulu);
                zulu = {};
                golf = 15;
                options = yankee[golf];
                options = offset.bind(entity)(options);
                verify = options.intl;
                options = verify.string;
                golf = yankee[golf];
                golf = offset.bind(entity)(golf);
                golf = golf.t;
                golf = golf.dXE8/P;
                golf = options.bind(verify)(golf);
                zulu['title'] = golf;
                mike = _closure1_slot11;
                mike = mike.bind(entity)();
                zulu['items'] = mike;
                mike = function(argFoo) { // Original name: onItemSelect
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 13;
                    mike = tango[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.updateGuild;
                    mike = {};
                    golf = argFoo;
                    mike['preferredLocale'] = golf;
                    mike = report.bind(oscar)(mike);
                    mike = 19;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideActionSheet;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                zulu['onItemSelect'] = mike;
                mike = _closure2_slot10;
                zulu['selectedItem'] = mike;
                mike = 'SelectLocale';
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
            mike = tango.bind(oscar)(mike, zulu);
            _closure2_slot11 = mike;
            mike = offset == entity;
            entity = null;
            if(mike) { _fun00002_ip = 1602; continue _fun00001 }
 685:
            tango = _closure1_slot16;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 22;
            mike = oscar[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.RedesignCompat;
            mike = {};
            options = _closure1_slot18;
            echo = 23;
            oscar = oscar[echo];
            oscar = golf.bind(report)(oscar);
            golf = oscar.Form;
            oscar = {};
            verify = verify.overview;
            oscar['style'] = verify;
            verify = offset != record;
            papa = null;
            if(!verify) { _fun00002_ip = 806; continue _fun00001 }
 760:
            foxtrot = _closure1_slot0;
            kilo = _closure1_slot2;
            verify = 18;
            verify = kilo[verify];
            output = foxtrot.bind(report)(verify);
            sizing = output.computeChannelName;
            quebec = _closure1_slot9;
            equality = _closure1_slot8;
            whiskey = true;
            variable37 = output;
            variable36 = record;
            papa = variable37[sizing](variable36, quebec, equality, whiskey, lima);
 806:
            kilo = _closure1_slot16;
            context = _closure1_slot0;
            record = _closure1_slot2;
            verify = record[echo];
            verify = context.bind(report)(verify);
            foxtrot = verify.FormSection;
            verify = {};
            sizing = record[echo];
            sizing = context.bind(report)(sizing);
            output = sizing.FormHint;
            sizing = {};
            status = record[sequence];
            status = context.bind(report)(status);
            lima = status.intl;
            sierra = lima.string;
            status = record[sequence];
            status = context.bind(report)(status);
            status = status.t;
            status = status.3q1TEh;
            status = sierra.bind(lima)(status);
            sizing['children'] = status;
            sizing = kilo.bind(report)(output, sizing);
            verify['hint'] = sizing;
            sizing = record[echo];
            sizing = context.bind(report)(sizing);
            output = sizing.FormRow;
            sizing = {};
            status = record[sequence];
            status = context.bind(report)(status);
            lima = status.intl;
            sierra = lima.string;
            status = record[sequence];
            status = context.bind(report)(status);
            status = status.t;
            status = status.U5BW0d;
            status = sierra.bind(lima)(status);
            sizing['label'] = status;
            target = !target;
            sizing['disabled'] = target;
            record = record[echo];
            record = context.bind(report)(record);
            record = record.FormRow;
            context = record.Arrow;
            record = {};
            record['label'] = papa;
            record = kilo.bind(report)(context, record);
            sizing['trailing'] = record;
            sizing['onPress'] = update;
            sizing = kilo.bind(report)(output, sizing);
            verify['children'] = sizing;
            foxtrot = kilo.bind(report)(foxtrot, verify);
            verify = new Array(4);
            verify[0] = foxtrot;
            foxtrot = offset != control;
            context = null;
            if(!foxtrot) { _fun00002_ip = 1108; continue _fun00001 }
 1062:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            foxtrot = 18;
            foxtrot = sizing[foxtrot];
            update = kilo.bind(report)(foxtrot);
            output = update.computeChannelName;
            quebec = _closure1_slot9;
            equality = _closure1_slot8;
            whiskey = true;
            variable37 = update;
            variable36 = control;
            context = variable37[output](variable36, quebec, equality, whiskey, lima);
 1108:
            sizing = _closure1_slot16;
            record = _closure1_slot0;
            control = _closure1_slot2;
            foxtrot = control[echo];
            foxtrot = record.bind(report)(foxtrot);
            kilo = foxtrot.FormSection;
            foxtrot = {};
            output = control[echo];
            output = record.bind(report)(output);
            update = output.FormHint;
            output = {};
            papa = control[sequence];
            papa = record.bind(report)(papa);
            status = papa.intl;
            target = status.string;
            papa = control[sequence];
            papa = record.bind(report)(papa);
            papa = papa.t;
            papa = papa.Fg6O//;
            papa = target.bind(status)(papa);
            output['children'] = papa;
            output = sizing.bind(report)(update, output);
            foxtrot['hint'] = output;
            output = control[echo];
            output = record.bind(report)(output);
            update = output.FormRow;
            output = {};
            papa = control[sequence];
            papa = record.bind(report)(papa);
            status = papa.intl;
            target = status.string;
            papa = control[sequence];
            papa = record.bind(report)(papa);
            papa = papa.t;
            papa = papa.vAyDGR;
            papa = target.bind(status)(papa);
            output['label'] = papa;
            papa = !yankee;
            output['disabled'] = papa;
            control = control[echo];
            control = record.bind(report)(control);
            control = control.FormRow;
            record = control.Arrow;
            control = {};
            control['label'] = context;
            control = sizing.bind(report)(record, control);
            output['trailing'] = control;
            output['onPress'] = source;
            output = sizing.bind(report)(update, output);
            foxtrot['children'] = output;
            foxtrot = sizing.bind(report)(kilo, foxtrot);
            verify[1] = foxtrot;
            romeo = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot5;
                    entity = entity.preferredLocale;
                    var _closure3_slot0 = entity;
                    zulu = _closure1_slot11;
                    tango = undefined;
                    report = zulu.bind(tango)();
                    zulu = report.find;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.value;
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    mike = zulu.bind(report)(mike);
                    zulu = null;
                    zulu = zulu == mike;
                    offset = undefined;
                    if(zulu) { _fun00024_ip = 65; continue _fun00023 }
 60:
                    offset = mike.label;
 65:
                    zulu = _closure1_slot16;
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 23;
                    entity = yankee[options];
                    entity = verify.bind(tango)(entity);
                    mike = entity.FormSection;
                    entity = {};
                    report = yankee[options];
                    report = verify.bind(tango)(report);
                    oscar = report.FormHint;
                    report = {};
                    romeo = 15;
                    foxtrot = yankee[romeo];
                    foxtrot = verify.bind(tango)(foxtrot);
                    kilo = foxtrot.intl;
                    backup = kilo.string;
                    foxtrot = yankee[romeo];
                    foxtrot = verify.bind(tango)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.l2g819;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    report['children'] = foxtrot;
                    report = zulu.bind(tango)(oscar, report);
                    entity['hint'] = report;
                    report = yankee[options];
                    report = verify.bind(tango)(report);
                    oscar = report.FormRow;
                    report = {};
                    foxtrot = yankee[romeo];
                    foxtrot = verify.bind(tango)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    romeo = yankee[romeo];
                    romeo = verify.bind(tango)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.VeC8vb;
                    romeo = foxtrot.bind(backup)(romeo);
                    report['label'] = romeo;
                    romeo = _closure2_slot6;
                    romeo = !romeo;
                    report['disabled'] = romeo;
                    options = yankee[options];
                    options = verify.bind(tango)(options);
                    options = options.FormRow;
                    verify = options.Arrow;
                    options = {};
                    options['label'] = offset;
                    options = zulu.bind(tango)(verify, options);
                    report['trailing'] = options;
                    golf = _closure2_slot11;
                    report['onPress'] = golf;
                    report = zulu.bind(tango)(oscar, report);
                    entity['children'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            romeo = romeo.bind(report)();
            verify[2] = romeo;
            offset = null;
            if(!yankee) { _fun00002_ip = 1578; continue _fun00001 }
 1372:
            foxtrot = _closure1_slot18;
            romeo = _closure1_slot17;
            yankee = {};
            output = _closure1_slot16;
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            backup = kilo[echo];
            backup = sizing.bind(report)(backup);
            update = backup.FormSection;
            backup = {};
            source = 24;
            source = kilo[source];
            source = sizing.bind(report)(source);
            control = source.TableRow;
            source = {};
            record = 'danger';
            source['variant'] = record;
            source['onPress'] = config;
            config = kilo[sequence];
            config = sizing.bind(report)(config);
            record = config.intl;
            config = record.string;
            sequence = kilo[sequence];
            sequence = sizing.bind(report)(sequence);
            sequence = sequence.t;
            sequence = sequence.c1BmbG;
            sequence = config.bind(record)(sequence);
            source['label'] = sequence;
            vacuum = !vacuum;
            source['disabled'] = vacuum;
            source = output.bind(report)(control, source);
            backup['children'] = source;
            update = output.bind(report)(update, backup);
            backup = new Array(2);
            backup[0] = update;
            kilo = kilo[echo];
            kilo = sizing.bind(report)(kilo);
            sizing = kilo.FormHint;
            kilo = {};
            echo = {};
            update = 8;
            echo['marginTop'] = update;
            kilo['style'] = echo;
            kilo['children'] = result;
            kilo = output.bind(report)(sizing, kilo);
            backup[1] = kilo;
            yankee['children'] = backup;
            offset = foxtrot.bind(report)(romeo, yankee);
 1578:
            verify[3] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1602:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();