// app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: InvitesDisabledRow
        _fun126483: for(var _fun126483_ip = 0; ; ) switch(_fun126483_ip) {
 0:
            entity = argFoo;
            report = entity.onPauseInvites;
            oscar = entity.invitesDisabled;
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 9;
            mike = entity[offset];
            tango = undefined;
            mike = golf.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = entity[offset];
            entity = golf.bind(tango)(entity);
            entity = entity.t;
            entity = entity.Uwsjn5;
            options = mike.bind(zulu)(entity);
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            mike = entity[offset];
            mike = verify.bind(tango)(mike);
            zulu = mike.intl;
            if(oscar) { _fun126483_ip = 177; continue _fun126483 }
 100:
            romeo = zulu.format;
            mike = entity[offset];
            mike = verify.bind(tango)(mike);
            mike = mike.t;
            golf = mike.IFBHam;
            mike = {};
            backup = _closure1_slot1;
            foxtrot = 10;
            foxtrot = entity[foxtrot];
            kilo = backup.bind(tango)(foxtrot);
            backup = kilo.getArticleURL;
            foxtrot = _closure1_slot10;
            foxtrot = foxtrot.INVITE_DISABLED;
            foxtrot = backup.bind(kilo)(foxtrot);
            mike['helpArticleUrl'] = foxtrot;
            golf = romeo.bind(zulu)(golf, mike);
            _fun126483_ip = 207; continue _fun126483;
 177:
            mike = zulu.string;
            entity = entity[offset];
            entity = verify.bind(tango)(entity);
            entity = entity.t;
            entity = entity.2LLbj4;
            golf = mike.bind(zulu)(entity);
 207:
            zulu = _closure1_slot11;
            mike = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableCheckboxRow;
            entity = {};
            entity['label'] = options;
            entity['subLabel'] = golf;
            golf = null;
            if(!oscar) { _fun126483_ip = 311; continue _fun126483 }
 253:
            offset = _closure1_slot11;
            verify = _closure1_slot0;
            foxtrot = _closure1_slot2;
            options = 12;
            options = foxtrot[options];
            options = verify.bind(tango)(options);
            verify = options.TableRowIcon;
            options = {};
            romeo = _closure1_slot1;
            yankee = 13;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(tango)(yankee);
            options['source'] = yankee;
            golf = offset.bind(tango)(verify, options);
 311:
            entity['icon'] = golf;
            entity['checked'] = oscar;
            entity['onPress'] = report;
            report = true;
            entity['start'] = report;
            entity['end'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = mike;
    entity = function(argFoo) { // Original name: GuildSettingsModalInstantInvites
        _fun126484: for(var _fun126484_ip = 0; ; ) switch(_fun126484_ip) {
 0:
            mike = argFoo;
            zulu = mike.invites;
            var _closure2_slot0 = zulu;
            tango = mike.guild;
            var _closure2_slot1 = tango;
            options = mike.showChannel;
            report = undefined;
            if(!(options === report)) { _fun126484_ip = 38; continue _fun126484 }
 36:
            options = false;
 38:
            var _closure2_slot2 = options;
            golf = mike.contentContainerStyle;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 14;
            oscar = offset[oscar];
            yankee = verify.bind(report)(oscar);
            oscar = yankee.useInvitesDisabledPermission;
            kilo = oscar.bind(yankee)(tango);
            _closure2_slot3 = kilo;
            oscar = 15;
            oscar = offset[oscar];
            yankee = verify.bind(report)(oscar);
            offset = yankee.useStateFromStores;
            oscar = _closure1_slot6;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot6;
                mike = zulu.getGuildIncident;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = offset.bind(yankee)(verify, oscar);
            _closure2_slot4 = sizing;
            verify = tango.hasFeature;
            oscar = _closure1_slot9;
            oscar = oscar.INVITES_DISABLED;
            yankee = verify.bind(tango)(oscar);
            if(yankee) { _fun126484_ip = 275; continue _fun126484 }
 184:
            verify = null;
            offset = verify == sizing;
            oscar = undefined;
            if(offset) { _fun126484_ip = 201; continue _fun126484 }
 195:
            oscar = sizing.invitesDisabledUntil;
 201:
            oscar = verify != oscar;
            if(!oscar) { _fun126484_ip = 272; continue _fun126484 }
 208:
            verify = global;
            foxtrot = verify.Date;
            echo = sizing.invitesDisabledUntil;
            romeo = foxtrot.prototype;
            romeo = Object.create(romeo, {constructor: {value: foxtrot}});
            update = romeo;
            offset = new update[foxtrot](echo, result);
            offset = offset instanceof Object ? offset : romeo;
            verify = verify.Date;
            romeo = verify.prototype;
            romeo = Object.create(romeo, {constructor: {value: verify}});
            update = romeo;
            verify = new update[verify](echo);
            verify = verify instanceof Object ? verify : romeo;
            oscar = offset > verify;
 272:
            yankee = oscar;
 275:
            _closure2_slot5 = yankee;
            offset = _closure1_slot4;
            verify = offset.useState;
            oscar = false;
            verify = verify.bind(offset)(oscar);
            oscar = _closure1_slot3;
            backup = 2;
            verify = oscar.bind(report)(verify, backup);
            oscar = 0;
            offset = verify[oscar];
            _closure2_slot6 = offset;
            romeo = 1;
            verify = verify[romeo];
            _closure2_slot7 = verify;
            output = _closure1_slot4;
            foxtrot = output.useState;
            verify = 21;
            foxtrot = foxtrot.bind(output)(verify);
            verify = _closure1_slot3;
            verify = verify.bind(report)(foxtrot, backup);
            oscar = verify[oscar];
            verify = verify[romeo];
            _closure2_slot8 = verify;
            foxtrot = _closure1_slot4;
            romeo = foxtrot.useMemo;
            verify = new Array(3);
            verify[0] = zulu;
            verify[1] = kilo;
            verify[2] = options;
            options = function() {
                _fun126486: for(var _fun126486_ip = 0; ; ) switch(_fun126486_ip) {
 0:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 16;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.sortBy;
                    tango = _closure2_slot0;
                    entity = function(argFoo) {
                        _fun126487: for(var _fun126487_ip = 0; ; ) switch(_fun126487_ip) {
 0:
                            mike = argFoo;
                            entity = _closure2_slot2;
                            if(entity) { _fun126487_ip = 70; continue _fun126487 }
 13:
                            tango = mike.inviter;
                            entity = null;
                            report = entity == tango;
                            zulu = undefined;
                            if(report) { _fun126487_ip = 54; continue _fun126487 }
 30:
                            report = tango.username;
                            tango = entity == report;
                            zulu = undefined;
                            if(tango) { _fun126487_ip = 54; continue _fun126487 }
 44:
                            tango = report.toLowerCase;
                            zulu = tango.bind(report)();
 54:
                            tango = entity != zulu;
                            entity = '';
                            if(!tango) { _fun126487_ip = 68; continue _fun126487 }
 65:
                            entity = zulu;
 68:
                            _fun126487_ip = 104; continue _fun126487;
 70:
                            zulu = mike.channel;
                            mike = null;
                            tango = mike == zulu;
                            mike = undefined;
                            if(tango) { _fun126487_ip = 101; continue _fun126487 }
 86:
                            tango = zulu.name;
                            zulu = tango.toLowerCase;
                            mike = zulu.bind(tango)();
 101:
                            entity = mike;
 104:
                            return entity;
                        }
                    };
                    entity = report.bind(oscar)(tango, entity);
                    zulu = _closure2_slot3;
                    if(!zulu) { _fun126486_ip = 75; continue _fun126486 }
 60:
                    zulu = entity.unshift;
                    mike = _closure1_slot16;
                    mike = zulu.bind(entity)(mike);
 75:
                    return entity;
                }
            };
            foxtrot = romeo.bind(foxtrot)(options, verify);
            backup = _closure1_slot4;
            romeo = backup.useEffect;
            verify = function() {
                zulu = _closure2_slot8;
                entity = undefined;
                mike = 21;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options = new Array(0);
            options = romeo.bind(backup)(verify, options);
            backup = _closure1_slot4;
            romeo = backup.useCallback;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.code;
                return entity;
            };
            options = new Array(0);
            verify = romeo.bind(backup)(verify, options);
            backup = _closure1_slot4;
            romeo = backup.useCallback;
            options = new Array(3);
            options[0] = offset;
            options[1] = sizing;
            options[2] = tango;
            tango = function() {
                _fun126490: for(var _fun126490_ip = 0; ; ) switch(_fun126490_ip) {
 0:
                    entity = _closure2_slot6;
                    if(entity) { _fun126490_ip = 282; continue _fun126490 }
 13:
                    zulu = _closure2_slot7;
                    tango = undefined;
                    entity = true;
                    entity = zulu.bind(tango)(entity);
 26: // try_start_0 // try_start_1
                    entity = {};
                    options = _closure1_slot0;
                    zulu = _closure1_slot2;
                    oscar = 17;
                    oscar = zulu[oscar];
                    oscar = options.bind(tango)(oscar);
                    oscar = oscar.GuildIncidentActionSources;
                    oscar = oscar.MESSAGE;
                    entity['source'] = oscar;
                    oscar = 18;
                    oscar = zulu[oscar];
                    verify = options.bind(tango)(oscar);
                    golf = verify.getIncidentAlertType;
                    oscar = _closure2_slot4;
                    oscar = golf.bind(verify)(oscar);
                    entity['alertType'] = oscar;
                    oscar = _closure1_slot1;
                    report = 19;
                    report = zulu[report];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.openLazy;
                    report = 21;
                    report = zulu[report];
                    options = options.bind(tango)(report);
                    report = 20;
                    report = zulu[report];
                    zulu = zulu.paths;
                    report = options.bind(tango)(report, zulu);
                    zulu = {};
                    options = _closure2_slot1;
                    zulu['guild'] = options;
                    zulu['analyticsData'] = entity;
                    entity = 'GuildIncidentActionsActionSheet';
                    entity = oscar.bind(golf)(report, entity, zulu);
 179: // try_end0
                    _fun126490_ip = 254; continue _fun126490;
 181: // catch_target0
                    CatchBlockStart(arg_register=5);
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 22;
                    entity = verify[entity];
                    report = options.bind(tango)(entity);
                    zulu = report.open;
                    entity = {};
                    golf = 'GUILD_SETTINGS_MODAL_INVITE_ERROR';
                    entity['key'] = golf;
                    golf = 13;
                    golf = verify[golf];
                    golf = options.bind(tango)(golf);
                    entity['icon'] = golf;
                    oscar = oscar.message;
                    entity['content'] = oscar;
                    entity = zulu.bind(report)(entity);
 254: // try_end1
                    zulu = _closure2_slot7;
                    entity = false;
                    entity = zulu.bind(tango)(entity);
                    _fun126490_ip = 282; continue _fun126490;
 267: // catch_target1
                    CatchBlockStart(arg_register=0);
                    zulu = _closure2_slot7;
                    mike = false;
                    mike = zulu.bind(tango)(mike);
                    throw entity;
 282:
                    entity = undefined;
                    return entity;
                }
            };
            romeo = romeo.bind(backup)(tango, options);
            _closure2_slot9 = romeo;
            backup = _closure1_slot4;
            options = backup.useCallback;
            tango = new Array(3);
            tango[0] = yankee;
            tango[1] = romeo;
            tango[2] = offset;
            entity = function(argFoo) {
                _fun126491: for(var _fun126491_ip = 0; ; ) switch(_fun126491_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.item;
                    zulu = oscar.code;
                    entity = _closure1_slot15;
                    if(!(zulu !== entity)) { _fun126491_ip = 65; continue _fun126491 }
 24:
                    report = _closure1_slot11;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 23;
                    entity = tango[entity];
                    tango = undefined;
                    zulu = zulu.bind(tango)(entity);
                    entity = {};
                    entity['invite'] = oscar;
                    entity = report.bind(tango)(zulu, entity);
                    _fun126491_ip = 113; continue _fun126491;
 65:
                    report = _closure1_slot11;
                    tango = _closure1_slot18;
                    zulu = {};
                    oscar = _closure2_slot5;
                    zulu['invitesDisabled'] = oscar;
                    oscar = _closure2_slot6;
                    zulu['invitesDisabledLoading'] = oscar;
                    mike = _closure2_slot9;
                    zulu['onPauseInvites'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 113:
                    return entity;
                }
            };
            options = options.bind(backup)(entity, tango);
            entity = null;
            if(!(entity != zulu)) { _fun126484_ip = 915; continue _fun126484 }
 547:
            tango = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 16;
            entity = backup[entity];
            entity = tango.bind(report)(entity);
            zulu = entity.bind(report)(zulu);
            entity = zulu.isEmpty;
            entity = entity.bind(zulu)();
            if(entity) { _fun126484_ip = 692; continue _fun126484 }
 585:
            tango = _closure1_slot11;
            zulu = _closure1_slot5;
            entity = {};
            backup = _closure1_slot14;
            if(kilo) { _fun126484_ip = 610; continue _fun126484 }
 602:
            kilo = backup.list;
            _fun126484_ip = 616; continue _fun126484;
 610:
            kilo = backup.listWithPause;
 616:
            backup = new Array(1);
            backup[0] = kilo;
            entity['style'] = backup;
            entity['data'] = foxtrot;
            entity['keyExtractor'] = verify;
            entity['renderItem'] = options;
            options = 10;
            entity['initialNumToRender'] = options;
            entity['windowSize'] = oscar;
            oscar = new Array(2);
            oscar[0] = golf;
            golf = _closure1_slot14;
            golf = golf.content;
            oscar[1] = golf;
            entity['contentContainerStyle'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun126484_ip = 913; continue _fun126484;
 692:
            oscar = _closure1_slot13;
            tango = _closure1_slot12;
            zulu = {};
            verify = _closure1_slot11;
            options = _closure1_slot18;
            golf = {};
            golf['onPauseInvites'] = romeo;
            golf['invitesDisabled'] = yankee;
            golf['invitesDisabledLoading'] = offset;
            options = verify.bind(report)(options, golf);
            golf = new Array(2);
            golf[0] = options;
            offset = _closure1_slot11;
            verify = _closure1_slot1;
            kilo = _closure1_slot2;
            options = 25;
            options = kilo[options];
            verify = verify.bind(report)(options);
            options = {};
            backup = _closure1_slot0;
            yankee = 26;
            yankee = kilo[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.InviteEmpty;
            options['Illustration'] = yankee;
            yankee = 9;
            romeo = kilo[yankee];
            romeo = backup.bind(report)(romeo);
            sizing = romeo.intl;
            foxtrot = sizing.string;
            romeo = kilo[yankee];
            romeo = backup.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.+nLJkZ;
            romeo = foxtrot.bind(sizing)(romeo);
            options['title'] = romeo;
            romeo = kilo[yankee];
            romeo = backup.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = kilo[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.F53CAQ;
            yankee = romeo.bind(foxtrot)(yankee);
            options['body'] = yankee;
            options = offset.bind(report)(verify, options);
            golf[1] = options;
            zulu['children'] = golf;
            entity = oscar.bind(report)(tango, zulu);
 913:
            _fun126484_ip = 953; continue _fun126484;
 915:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 24;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.SceneLoadingIndicator;
            mike = {};
            entity = tango.bind(report)(zulu, mike);
 953:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    romeo = 0;
    report = golf[romeo];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.Platform;
    offset = report.StyleSheet;
    report = report.FlatList;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    verify = options.bind(entity)(report);
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.GuildFeatures;
    var _closure1_slot9 = options;
    report = report.HelpdeskArticles;
    var _closure1_slot10 = report;
    foxtrot = 8;
    report = golf[foxtrot];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot11 = report;
    report = golf[foxtrot];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot12 = report;
    report = golf[foxtrot];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot13 = report;
    options = offset.create;
    report = {};
    yankee = {};
    yankee['paddingTop'] = foxtrot;
    report['list'] = yankee;
    yankee = {'padding': 16, 'gap': 24};
    report['content'] = yankee;
    yankee = {};
    yankee['paddingTop'] = romeo;
    report['listWithPause'] = yankee;
    report = options.bind(offset)(report);
    var _closure1_slot14 = report;
    options = 'pause_invites';
    var _closure1_slot15 = options;
    report = {};
    report['code'] = options;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    output = options;
    sizing = report;
    report = new output[verify](sizing, kilo);
    report = report instanceof Object ? report : options;
    var _closure1_slot16 = report;
    report = {};
    var _closure1_slot17 = report;
    report = 27;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: ConnectedGuildSettingsModalInstantInvites
        _fun126492: for(var _fun126492_ip = 0; ; ) switch(_fun126492_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            offset = mike.contentContainerStyle;
            golf = mike.navScrim;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 15;
            options = tango[mike];
            report = undefined;
            romeo = zulu.bind(report)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot7;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                zulu = _closure1_slot7;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = yankee.bind(romeo)(verify, options);
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useStateFromStores;
            options = _closure1_slot8;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                _fun126494: for(var _fun126494_ip = 0; ; ) switch(_fun126494_ip) {
 0:
                    zulu = _closure1_slot8;
                    entity = zulu.getProps;
                    entity = entity.bind(zulu)();
                    entity = entity.invites;
                    zulu = null;
                    if(!(zulu == entity)) { _fun126494_ip = 33; continue _fun126494 }
 29:
                    entity = _closure1_slot17;
 33:
                    return entity;
                }
            };
            yankee = zulu.bind(tango)(mike, entity);
            entity = null;
            mike = entity != romeo;
            if(!mike) { _fun126492_ip = 198; continue _fun126492 }
 129:
            tango = _closure1_slot13;
            zulu = _closure1_slot12;
            mike = {};
            verify = _closure1_slot11;
            options = _closure1_slot19;
            oscar = {};
            oscar['guild'] = romeo;
            oscar['invites'] = yankee;
            oscar['contentContainerStyle'] = offset;
            offset = true;
            oscar['showChannel'] = offset;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 198:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['InvitesDisabledRow'] = mike;
    return entity;
})();