// app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: InvitesDisabledRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.onPauseInvites;
            oscard = entity.invitesDisabled;
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 9;
            michal = entity[offset];
            tangon = undefined;
            michal = golfie.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = entity[offset];
            entity = golfie.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.Uwsjn5;
            option = michal.bind(zuuluu)(entity);
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            michal = entity[offset];
            michal = verify.bind(tangon)(michal);
            zuuluu = michal.intl;
            if(oscard) { _fun00002_ip = 179; continue _fun00001 }
 100:
            romeon = zuuluu.format;
            michal = entity[offset];
            michal = verify.bind(tangon)(michal);
            michal = michal.t;
            golfie = michal.IFBHam;
            michal = {};
            backup = _closure1_slot1;
            foxtra = 10;
            foxtra = entity[foxtra];
            kiloes = backup.bind(tangon)(foxtra);
            backup = kiloes.getArticleURL;
            foxtra = _closure1_slot10;
            foxtra = foxtra.INVITE_DISABLED;
            foxtra = backup.bind(kiloes)(foxtra);
            michal['helpArticleUrl'] = foxtra;
            golfie = romeon.bind(zuuluu)(golfie, michal);
            _fun00002_ip = 211; continue _fun00001;
 179:
            michal = zuuluu.string;
            entity = entity[offset];
            entity = verify.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.2LLbj4;
            golfie = michal.bind(zuuluu)(entity);
 211:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableCheckboxRow;
            entity = {};
            entity['label'] = option;
            entity['subLabel'] = golfie;
            golfie = null;
            if(!oscard) { _fun00002_ip = 315; continue _fun00001 }
 257:
            offset = _closure1_slot11;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 12;
            option = foxtra[option];
            option = verify.bind(tangon)(option);
            verify = option.TableRowIcon;
            option = {};
            romeon = _closure1_slot1;
            yankee = 13;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            option['source'] = yankee;
            golfie = offset.bind(tangon)(verify, option);
 315:
            entity['icon'] = golfie;
            entity['checked'] = oscard;
            entity['onPress'] = report;
            report = true;
            entity['start'] = report;
            entity['end'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = michal;
    entity = function(argFoo) { // Original name: GuildSettingsModalInstantInvites
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.invites;
            var _closure2_slot0 = zuuluu;
            tangon = michal.guild;
            var _closure2_slot1 = tangon;
            option = michal.showChannel;
            report = undefined;
            if(!(option === report)) { _fun00004_ip = 38; continue _fun00003 }
 36:
            option = false;
 38:
            var _closure2_slot2 = option;
            golfie = michal.contentContainerStyle;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 14;
            oscard = offset[oscard];
            yankee = verify.bind(report)(oscard);
            oscard = yankee.useInvitesDisabledPermission;
            kiloes = oscard.bind(yankee)(tangon);
            _closure2_slot3 = kiloes;
            oscard = 15;
            oscard = offset[oscard];
            yankee = verify.bind(report)(oscard);
            offset = yankee.useStateFromStores;
            oscard = _closure1_slot6;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getGuildIncident;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = offset.bind(yankee)(verify, oscard);
            _closure2_slot4 = sizing;
            offset = tangon.features;
            verify = offset.has;
            oscard = _closure1_slot9;
            oscard = oscard.INVITES_DISABLED;
            yankee = verify.bind(offset)(oscard);
            if(yankee) { _fun00004_ip = 280; continue _fun00003 }
 189:
            verify = null;
            offset = verify == sizing;
            oscard = undefined;
            if(offset) { _fun00004_ip = 206; continue _fun00003 }
 200:
            oscard = sizing.invitesDisabledUntil;
 206:
            oscard = verify != oscard;
            if(!oscard) { _fun00004_ip = 277; continue _fun00003 }
 213:
            verify = global;
            foxtra = verify.Date;
            echoed = sizing.invitesDisabledUntil;
            romeon = foxtra.prototype;
            romeon = Object.create(romeon, {constructor: {value: foxtra}});
            update = romeon;
            offset = new update[foxtra](echoed, result);
            offset = offset instanceof Object ? offset : romeon;
            verify = verify.Date;
            romeon = verify.prototype;
            romeon = Object.create(romeon, {constructor: {value: verify}});
            update = romeon;
            verify = new update[verify](echoed);
            verify = verify instanceof Object ? verify : romeon;
            oscard = offset > verify;
 277:
            yankee = oscard;
 280:
            _closure2_slot5 = yankee;
            offset = _closure1_slot4;
            verify = offset.useState;
            oscard = false;
            verify = verify.bind(offset)(oscard);
            oscard = _closure1_slot3;
            backup = 2;
            verify = oscard.bind(report)(verify, backup);
            oscard = 0;
            offset = verify[oscard];
            _closure2_slot6 = offset;
            romeon = 1;
            verify = verify[romeon];
            _closure2_slot7 = verify;
            output = _closure1_slot4;
            foxtra = output.useState;
            verify = 21;
            foxtra = foxtra.bind(output)(verify);
            verify = _closure1_slot3;
            verify = verify.bind(report)(foxtra, backup);
            oscard = verify[oscard];
            verify = verify[romeon];
            _closure2_slot8 = verify;
            foxtra = _closure1_slot4;
            romeon = foxtra.useMemo;
            verify = new Array(3);
            verify[0] = zuuluu;
            verify[1] = kiloes;
            verify[2] = option;
            option = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 16;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.sortBy;
                    tangon = _closure2_slot0;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            michal = argFoo;
                            entity = _closure2_slot2;
                            if(entity) { _fun00008_ip = 70; continue _fun00007 }
 13:
                            tangon = michal.inviter;
                            entity = null;
                            report = entity == tangon;
                            zuuluu = undefined;
                            if(report) { _fun00008_ip = 54; continue _fun00007 }
 30:
                            report = tangon.username;
                            tangon = entity == report;
                            zuuluu = undefined;
                            if(tangon) { _fun00008_ip = 54; continue _fun00007 }
 44:
                            tangon = report.toLowerCase;
                            zuuluu = tangon.bind(report)();
 54:
                            tangon = entity != zuuluu;
                            entity = '';
                            if(!tangon) { _fun00008_ip = 68; continue _fun00007 }
 65:
                            entity = zuuluu;
 68:
                            _fun00008_ip = 104; continue _fun00007;
 70:
                            zuuluu = michal.channel;
                            michal = null;
                            tangon = michal == zuuluu;
                            michal = undefined;
                            if(tangon) { _fun00008_ip = 101; continue _fun00007 }
 86:
                            tangon = zuuluu.name;
                            zuuluu = tangon.toLowerCase;
                            michal = zuuluu.bind(tangon)();
 101:
                            entity = michal;
 104:
                            return entity;
                        }
                    };
                    entity = report.bind(oscard)(tangon, entity);
                    zuuluu = _closure2_slot3;
                    if(!zuuluu) { _fun00006_ip = 75; continue _fun00005 }
 60:
                    zuuluu = entity.unshift;
                    michal = _closure1_slot16;
                    michal = zuuluu.bind(entity)(michal);
 75:
                    return entity;
                }
            };
            foxtra = romeon.bind(foxtra)(option, verify);
            backup = _closure1_slot4;
            romeon = backup.useEffect;
            verify = function() {
                zuuluu = _closure2_slot8;
                entity = undefined;
                michal = 21;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = new Array(0);
            option = romeon.bind(backup)(verify, option);
            backup = _closure1_slot4;
            romeon = backup.useCallback;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.code;
                return entity;
            };
            option = new Array(0);
            verify = romeon.bind(backup)(verify, option);
            backup = _closure1_slot4;
            romeon = backup.useCallback;
            option = new Array(3);
            option[0] = offset;
            option[1] = sizing;
            option[2] = tangon;
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot6;
                    if(entity) { _fun00010_ip = 282; continue _fun00009 }
 13:
                    zuuluu = _closure2_slot7;
                    tangon = undefined;
                    entity = true;
                    entity = zuuluu.bind(tangon)(entity);
 26: // try_start_0 // try_start_1
                    entity = {};
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    oscard = 17;
                    oscard = zuuluu[oscard];
                    oscard = option.bind(tangon)(oscard);
                    oscard = oscard.GuildIncidentActionSources;
                    oscard = oscard.MESSAGE;
                    entity['source'] = oscard;
                    oscard = 18;
                    oscard = zuuluu[oscard];
                    verify = option.bind(tangon)(oscard);
                    golfie = verify.getIncidentAlertType;
                    oscard = _closure2_slot4;
                    oscard = golfie.bind(verify)(oscard);
                    entity['alertType'] = oscard;
                    oscard = _closure1_slot1;
                    report = 19;
                    report = zuuluu[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.openLazy;
                    report = 21;
                    report = zuuluu[report];
                    option = option.bind(tangon)(report);
                    report = 20;
                    report = zuuluu[report];
                    zuuluu = zuuluu.paths;
                    report = option.bind(tangon)(report, zuuluu);
                    zuuluu = {};
                    option = _closure2_slot1;
                    zuuluu['guild'] = option;
                    zuuluu['analyticsData'] = entity;
                    entity = 'GuildIncidentActionsActionSheet';
                    entity = oscard.bind(golfie)(report, entity, zuuluu);
 179: // try_end0
                    _fun00010_ip = 254; continue _fun00009;
 181: // catch_target0
                    CatchBlockStart(arg_register=5);
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 22;
                    entity = verify[entity];
                    report = option.bind(tangon)(entity);
                    zuuluu = report.open;
                    entity = {};
                    golfie = 'GUILD_SETTINGS_MODAL_INVITE_ERROR';
                    entity['key'] = golfie;
                    golfie = 13;
                    golfie = verify[golfie];
                    golfie = option.bind(tangon)(golfie);
                    entity['icon'] = golfie;
                    oscard = oscard.message;
                    entity['content'] = oscard;
                    entity = zuuluu.bind(report)(entity);
 254: // try_end1
                    zuuluu = _closure2_slot7;
                    entity = false;
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00010_ip = 282; continue _fun00009;
 267: // catch_target1
                    CatchBlockStart(arg_register=0);
                    zuuluu = _closure2_slot7;
                    michal = false;
                    michal = zuuluu.bind(tangon)(michal);
                    throw entity;
 282:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = romeon.bind(backup)(tangon, option);
            _closure2_slot9 = romeon;
            backup = _closure1_slot4;
            option = backup.useCallback;
            tangon = new Array(3);
            tangon[0] = yankee;
            tangon[1] = romeon;
            tangon[2] = offset;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.item;
                    zuuluu = oscard.code;
                    entity = _closure1_slot15;
                    if(!(zuuluu !== entity)) { _fun00012_ip = 65; continue _fun00011 }
 24:
                    report = _closure1_slot11;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 23;
                    entity = tangon[entity];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = {};
                    entity['invite'] = oscard;
                    entity = report.bind(tangon)(zuuluu, entity);
                    _fun00012_ip = 113; continue _fun00011;
 65:
                    report = _closure1_slot11;
                    tangon = _closure1_slot18;
                    zuuluu = {};
                    oscard = _closure2_slot5;
                    zuuluu['invitesDisabled'] = oscard;
                    oscard = _closure2_slot6;
                    zuuluu['invitesDisabledLoading'] = oscard;
                    michal = _closure2_slot9;
                    zuuluu['onPauseInvites'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 113:
                    return entity;
                }
            };
            option = option.bind(backup)(entity, tangon);
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 920; continue _fun00003 }
 552:
            tangon = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 16;
            entity = backup[entity];
            entity = tangon.bind(report)(entity);
            zuuluu = entity.bind(report)(zuuluu);
            entity = zuuluu.isEmpty;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00004_ip = 697; continue _fun00003 }
 590:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot5;
            entity = {};
            backup = _closure1_slot14;
            if(kiloes) { _fun00004_ip = 615; continue _fun00003 }
 607:
            kiloes = backup.list;
            _fun00004_ip = 621; continue _fun00003;
 615:
            kiloes = backup.listWithPause;
 621:
            backup = new Array(1);
            backup[0] = kiloes;
            entity['style'] = backup;
            entity['data'] = foxtra;
            entity['keyExtractor'] = verify;
            entity['renderItem'] = option;
            option = 10;
            entity['initialNumToRender'] = option;
            entity['windowSize'] = oscard;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = _closure1_slot14;
            golfie = golfie.content;
            oscard[1] = golfie;
            entity['contentContainerStyle'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 918; continue _fun00003;
 697:
            oscard = _closure1_slot13;
            tangon = _closure1_slot12;
            zuuluu = {};
            verify = _closure1_slot11;
            option = _closure1_slot18;
            golfie = {};
            golfie['onPauseInvites'] = romeon;
            golfie['invitesDisabled'] = yankee;
            golfie['invitesDisabledLoading'] = offset;
            option = verify.bind(report)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            offset = _closure1_slot11;
            verify = _closure1_slot1;
            kiloes = _closure1_slot2;
            option = 25;
            option = kiloes[option];
            verify = verify.bind(report)(option);
            option = {};
            backup = _closure1_slot0;
            yankee = 26;
            yankee = kiloes[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.InviteEmpty;
            option['Illustration'] = yankee;
            yankee = 9;
            romeon = kiloes[yankee];
            romeon = backup.bind(report)(romeon);
            sizing = romeon.intl;
            foxtra = sizing.string;
            romeon = kiloes[yankee];
            romeon = backup.bind(report)(romeon);
            romeon = romeon.t;
            romeon = romeon.+nLJkZ;
            romeon = foxtra.bind(sizing)(romeon);
            option['title'] = romeon;
            romeon = kiloes[yankee];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.F53CAQ;
            yankee = romeon.bind(foxtra)(yankee);
            option['body'] = yankee;
            option = offset.bind(report)(verify, option);
            golfie[1] = option;
            zuuluu['children'] = golfie;
            entity = oscard.bind(report)(tangon, zuuluu);
 918:
            _fun00004_ip = 958; continue _fun00003;
 920:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 24;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.SceneLoadingIndicator;
            michal = {};
            entity = tangon.bind(report)(zuuluu, michal);
 958:
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    romeon = 0;
    report = golfie[romeon];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.Platform;
    offset = report.StyleSheet;
    report = report.FlatList;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.GuildFeatures;
    var _closure1_slot9 = option;
    report = report.HelpdeskArticles;
    var _closure1_slot10 = report;
    foxtra = 8;
    report = golfie[foxtra];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot11 = option;
    option = report.Fragment;
    var _closure1_slot12 = option;
    report = report.jsxs;
    var _closure1_slot13 = report;
    option = offset.create;
    report = {};
    yankee = {};
    yankee['paddingTop'] = foxtra;
    report['list'] = yankee;
    yankee = {'padding': 16, 'gap': 24};
    report['content'] = yankee;
    yankee = {};
    yankee['paddingTop'] = romeon;
    report['listWithPause'] = yankee;
    report = option.bind(offset)(report);
    var _closure1_slot14 = report;
    option = 'pause_invites';
    var _closure1_slot15 = option;
    report = {};
    report['code'] = option;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    output = option;
    sizing = report;
    report = new output[verify](sizing, kiloes);
    report = report instanceof Object ? report : option;
    var _closure1_slot16 = report;
    report = {};
    var _closure1_slot17 = report;
    report = 28;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: ConnectedGuildSettingsModalInstantInvites
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            offset = michal.contentContainerStyle;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 15;
            oscard = tangon[michal];
            report = undefined;
            yankee = zuuluu.bind(report)(oscard);
            verify = yankee.useStateFromStores;
            oscard = _closure1_slot7;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = verify.bind(yankee)(option, oscard);
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useStateFromStores;
            oscard = _closure1_slot8;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getProps;
                    entity = entity.bind(zuuluu)();
                    entity = entity.invites;
                    zuuluu = null;
                    if(!(zuuluu == entity)) { _fun00016_ip = 33; continue _fun00015 }
 29:
                    entity = _closure1_slot17;
 33:
                    return entity;
                }
            };
            yankee = zuuluu.bind(tangon)(michal, entity);
            entity = null;
            michal = entity != romeon;
            if(!michal) { _fun00014_ip = 230; continue _fun00013 }
 123:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot12;
            michal = {};
            verify = _closure1_slot11;
            option = _closure1_slot19;
            oscard = {};
            oscard['guild'] = romeon;
            oscard['invites'] = yankee;
            oscard['contentContainerStyle'] = offset;
            offset = true;
            oscard['showChannel'] = offset;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot11;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 27;
            golfie = offset[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.NavScrim;
            golfie = {};
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 230:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['InvitesDisabledRow'] = michal;
    return entity;
})();