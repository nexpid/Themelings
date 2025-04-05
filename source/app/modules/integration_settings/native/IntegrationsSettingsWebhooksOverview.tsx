// app/modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: WebhookItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            golfie = michal.avatar;
            var _closure2_slot0 = golfie;
            backup = michal.channel;
            var _closure2_slot1 = backup;
            yankee = michal.guildId;
            var _closure2_slot2 = yankee;
            romeon = michal.name;
            var _closure2_slot3 = romeon;
            offset = michal.token;
            var _closure2_slot4 = offset;
            result = michal.user;
            verify = michal.webhookId;
            var _closure2_slot5 = verify;
            kiloes = michal.webhookType;
            var _closure2_slot6 = kiloes;
            foxtra = _closure1_slot0;
            echoed = _closure1_slot2;
            michal = 14;
            michal = echoed[michal];
            tangon = undefined;
            zuuluu = foxtra.bind(tangon)(michal);
            michal = zuuluu.useNavigation;
            michal = michal.bind(zuuluu)();
            var _closure2_slot7 = michal;
            option = _closure1_slot8;
            report = option.useCallback;
            zuuluu = new Array(8);
            zuuluu[0] = verify;
            zuuluu[1] = kiloes;
            zuuluu[2] = golfie;
            zuuluu[3] = backup;
            zuuluu[4] = yankee;
            zuuluu[5] = romeon;
            zuuluu[6] = offset;
            zuuluu[7] = michal;
            michal = function() {
                tangon = _closure2_slot7;
                zuuluu = tangon.push;
                entity = _closure1_slot14;
                michal = entity.EDIT_WEBHOOK;
                entity = {};
                oscard = _closure2_slot5;
                entity['webhookId'] = oscard;
                oscard = _closure2_slot6;
                entity['webhookType'] = oscard;
                oscard = _closure2_slot0;
                entity['avatar'] = oscard;
                oscard = _closure2_slot3;
                entity['name'] = oscard;
                oscard = _closure2_slot1;
                entity['channel'] = oscard;
                oscard = _closure2_slot2;
                entity['guildId'] = oscard;
                report = _closure2_slot4;
                entity['token'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            yankee = report.bind(option)(michal, zuuluu);
            report = _closure1_slot8;
            zuuluu = report.useMemo;
            michal = new Array(2);
            michal[0] = verify;
            michal[1] = golfie;
            entity = function() {
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 15;
                michal = golfie[entity];
                tangon = undefined;
                zuuluu = report.bind(tangon)(michal);
                michal = zuuluu.makeSource;
                entity = golfie[entity];
                report = report.bind(tangon)(entity);
                tangon = report.getUserAvatarURL;
                entity = {};
                option = _closure2_slot5;
                entity['id'] = option;
                golfie = _closure2_slot0;
                entity['avatar'] = golfie;
                oscard = _closure1_slot15;
                entity['discriminator'] = oscard;
                entity = tangon.bind(report)(entity);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            update = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            option = _closure1_slot17;
            offset = 16;
            report = echoed[offset];
            report = foxtra.bind(tangon)(report);
            golfie = report.FormRow;
            report = {};
            sizing = _closure1_slot17;
            output = _closure1_slot1;
            backup = 17;
            backup = echoed[backup];
            kiloes = output.bind(tangon)(backup);
            backup = {};
            backup['source'] = update;
            backup = sizing.bind(tangon)(kiloes, backup);
            report['leading'] = backup;
            sizing = _closure1_slot17;
            backup = echoed[offset];
            backup = foxtra.bind(tangon)(backup);
            backup = backup.FormRow;
            kiloes = backup.Arrow;
            backup = {};
            backup = sizing.bind(tangon)(kiloes, backup);
            report['trailing'] = backup;
            report['label'] = romeon;
            romeon = 18;
            backup = echoed[romeon];
            backup = foxtra.bind(tangon)(backup);
            kiloes = backup.intl;
            backup = kiloes.formatToPlainString;
            romeon = echoed[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.t;
            foxtra = romeon.YrsmBA;
            romeon = {};
            sizing = 19;
            sizing = echoed[sizing];
            output = output.bind(tangon)(sizing);
            sizing = output.extractTimestamp;
            sizing = sizing.bind(output)(verify);
            romeon['timestamp'] = sizing;
            sizing = null;
            echoed = sizing == result;
            output = undefined;
            if(echoed) { _fun00004_ip = 411; continue _fun00003 }
 406:
            output = result.tag;
 411:
            result = sizing != output;
            sizing = '';
            if(!result) { _fun00004_ip = 425; continue _fun00003 }
 422:
            sizing = output;
 425:
            romeon['username'] = sizing;
            romeon = backup.bind(kiloes)(foxtra, romeon);
            report['subLabel'] = romeon;
            report['onPress'] = yankee;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot17;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.FormDivider;
            oscard = {};
            oscard = option.bind(tangon)(golfie, oscard, verify);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: ConnectedWebhookItem
        tangon = argFoo;
        entity = tangon.channelId;
        var _closure2_slot0 = entity;
        entity = tangon.user;
        var _closure2_slot1 = entity;
        entity = null;
        zuuluu = Object.create(entity);
        entity = 0;
        zuuluu['channelId'] = entity;
        zuuluu['user'] = entity;
        backup = {};
        foxtra = tangon;
        romeon = zuuluu;
        report = copyDataProperties(backup, foxtra, romeon);
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 20;
        golfie = option[zuuluu];
        tangon = undefined;
        yankee = oscard.bind(tangon)(golfie);
        offset = yankee.useStateFromStores;
        golfie = _closure1_slot11;
        verify = new Array(1);
        verify[0] = golfie;
        golfie = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot11;
                michal = zuuluu.getUser;
                report = _closure2_slot1;
                entity = null;
                report = entity == report;
                entity = undefined;
                if(report) { _fun00006_ip = 40; continue _fun00005 }
 31:
                tangon = _closure2_slot1;
                entity = tangon.id;
 40:
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        golfie = offset.bind(yankee)(verify, golfie);
        zuuluu = option[zuuluu];
        option = oscard.bind(tangon)(zuuluu);
        oscard = option.useStateFromStores;
        verify = _closure1_slot9;
        zuuluu = new Array(1);
        zuuluu[0] = verify;
        michal = function() {
            zuuluu = _closure1_slot9;
            michal = zuuluu.getChannel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = oscard.bind(option)(zuuluu, michal);
        zuuluu = _closure1_slot17;
        michal = _closure1_slot24;
        entity = {};
        backup = entity;
        foxtra = report;
        report = copyDataProperties(backup, foxtra);
        report = 'user';
        entity[report] = golfie;
        report = 'channel';
        entity[report] = oscard;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot8 = tangon;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Platform;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot11 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot12 = golfie;
    golfie = 11;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.HelpdeskArticles;
    var _closure1_slot13 = option;
    option = golfie.ChannelSettingsSections;
    var _closure1_slot14 = option;
    option = golfie.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot15 = option;
    golfie = golfie.WebhookTypes;
    var _closure1_slot16 = golfie;
    golfie = 12;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.jsx;
    var _closure1_slot17 = option;
    option = golfie.Fragment;
    var _closure1_slot18 = option;
    golfie = golfie.jsxs;
    var _closure1_slot19 = golfie;
    golfie = 13;
    golfie = oscard[golfie];
    verify = report.bind(entity)(golfie);
    option = verify.createLegacyClassComponentStyles;
    golfie = {};
    offset = {};
    yankee = 16;
    offset['paddingTop'] = yankee;
    golfie['form'] = offset;
    offset = {'paddingHorizontal': 16, 'marginBottom': 16};
    golfie['hint'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot20 = golfie;
    golfie = tangon.PureComponent;
    tangon = function(argFoo) {
        tangon = function() { // Original name: WebhooksOverview
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot23;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'getHelpText';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                entity = entity.props;
                michal = entity.webhookType;
                entity = _closure1_slot16;
                entity = entity.CHANNEL_FOLLOWER;
                if(!(michal !== entity)) { _fun00010_ip = 137; continue _fun00009 }
 31:
                michal = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 18;
                zuuluu = verify[entity];
                option = undefined;
                zuuluu = michal.bind(option)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = verify[entity];
                entity = michal.bind(option)(entity);
                entity = entity.t;
                michal = entity.3hX7Gx;
                entity = {};
                golfie = _closure1_slot1;
                report = 21;
                report = verify[report];
                option = golfie.bind(option)(report);
                golfie = option.getArticleURL;
                report = _closure1_slot13;
                report = report.WEBHOOKS_INTRODUCTION;
                report = golfie.bind(option)(report);
                entity['articleURL'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                _fun00010_ip = 241; continue _fun00009;
 137:
                zuuluu = _closure1_slot0;
                offset = _closure1_slot2;
                michal = 18;
                tangon = offset[michal];
                verify = undefined;
                tangon = zuuluu.bind(verify)(tangon);
                report = tangon.intl;
                tangon = report.formatToPlainString;
                michal = offset[michal];
                michal = zuuluu.bind(verify)(michal);
                michal = michal.t;
                zuuluu = michal.5u+aV1;
                michal = {};
                option = _closure1_slot1;
                golfie = 21;
                golfie = offset[golfie];
                option = option.bind(verify)(golfie);
                golfie = option.getArticleURL;
                oscard = _closure1_slot13;
                oscard = oscard.CHANNEL_FOLLOWING;
                oscard = golfie.bind(option)(oscard);
                michal['helpdeskArticle'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 241:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'renderWebhooks';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.props;
                tangon = entity.webhooks;
                foxtra = entity.webhookType;
                var _closure3_slot0 = foxtra;
                entity = null;
                golfie = tangon;
                if(!(entity != foxtra)) { _fun00012_ip = 52; continue _fun00011 }
 35:
                zuuluu = tangon.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.type;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                golfie = zuuluu.bind(tangon)(entity);
 52:
                entity = michal.getHelpText;
                verify = entity.bind(michal)();
                michal = golfie.length;
                entity = 0;
                if(!(entity !== michal)) { _fun00012_ip = 180; continue _fun00011 }
 75:
                tangon = _closure1_slot17;
                option = _closure1_slot0;
                yankee = _closure1_slot2;
                oscard = 16;
                entity = yankee[oscard];
                zuuluu = undefined;
                entity = option.bind(zuuluu)(entity);
                michal = entity.FormSection;
                entity = {};
                offset = _closure1_slot17;
                oscard = yankee[oscard];
                oscard = option.bind(zuuluu)(oscard);
                option = oscard.FormHint;
                oscard = {};
                oscard['children'] = verify;
                oscard = offset.bind(zuuluu)(option, oscard);
                entity['hint'] = oscard;
                oscard = golfie.map;
                report = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        michal = argFoo;
                        report = michal.id;
                        entity = michal.type;
                        romeon = michal.avatar;
                        offset = michal.name;
                        verify = michal.user;
                        golfie = michal.token;
                        oscard = michal.guild_id;
                        option = michal.channel_id;
                        tangon = _closure1_slot17;
                        zuuluu = _closure1_slot25;
                        michal = {};
                        michal['webhookId'] = report;
                        michal['webhookType'] = entity;
                        entity = null;
                        foxtra = entity != romeon;
                        entity = undefined;
                        yankee = undefined;
                        if(!foxtra) { _fun00014_ip = 84; continue _fun00013 }
 81:
                        yankee = romeon;
 84:
                        michal['avatar'] = yankee;
                        michal['name'] = offset;
                        michal['user'] = verify;
                        michal['channelId'] = option;
                        michal['token'] = golfie;
                        michal['guildId'] = oscard;
                        entity = tangon.bind(entity)(zuuluu, michal, report);
                        return entity;
                    }
                };
                report = oscard.bind(golfie)(report);
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                _fun00012_ip = 521; continue _fun00011;
 180:
                report = _closure1_slot19;
                tangon = _closure1_slot18;
                zuuluu = {};
                option = _closure1_slot17;
                romeon = _closure1_slot0;
                backup = _closure1_slot2;
                michal = 16;
                oscard = backup[michal];
                michal = undefined;
                oscard = romeon.bind(michal)(oscard);
                golfie = oscard.FormHint;
                oscard = {};
                oscard['children'] = verify;
                golfie = option.bind(michal)(golfie, oscard);
                oscard = new Array(2);
                oscard[0] = golfie;
                verify = _closure1_slot17;
                option = _closure1_slot1;
                golfie = 22;
                golfie = backup[golfie];
                option = option.bind(michal)(golfie);
                golfie = {};
                offset = 23;
                offset = backup[offset];
                offset = romeon.bind(michal)(offset);
                offset = offset.WebhookEmpty;
                golfie['Illustration'] = offset;
                offset = _closure1_slot16;
                offset = offset.CHANNEL_FOLLOWER;
                if(!(foxtra !== offset)) { _fun00012_ip = 363; continue _fun00011 }
 304:
                kiloes = _closure1_slot0;
                sizing = _closure1_slot2;
                offset = 18;
                romeon = sizing[offset];
                romeon = kiloes.bind(michal)(romeon);
                backup = romeon.intl;
                romeon = backup.string;
                offset = sizing[offset];
                offset = kiloes.bind(michal)(offset);
                offset = offset.t;
                offset = offset.4JAVIy;
                offset = romeon.bind(backup)(offset);
                _fun00012_ip = 420; continue _fun00011;
 363:
                sizing = _closure1_slot0;
                output = _closure1_slot2;
                romeon = 18;
                backup = output[romeon];
                backup = sizing.bind(michal)(backup);
                kiloes = backup.intl;
                backup = kiloes.string;
                romeon = output[romeon];
                romeon = sizing.bind(michal)(romeon);
                romeon = romeon.t;
                romeon = romeon.dkHRkJ;
                offset = backup.bind(kiloes)(romeon);
 420:
                golfie['title'] = offset;
                offset = _closure1_slot16;
                romeon = offset.CHANNEL_FOLLOWER;
                offset = undefined;
                if(!(foxtra !== romeon)) { _fun00012_ip = 497; continue _fun00011 }
 440:
                backup = _closure1_slot0;
                kiloes = _closure1_slot2;
                yankee = 18;
                romeon = kiloes[yankee];
                romeon = backup.bind(michal)(romeon);
                foxtra = romeon.intl;
                romeon = foxtra.string;
                yankee = kiloes[yankee];
                yankee = backup.bind(michal)(yankee);
                yankee = yankee.t;
                yankee = yankee.Gg3fUV;
                offset = romeon.bind(foxtra)(yankee);
 497:
                golfie['body'] = offset;
                golfie = verify.bind(michal)(option, golfie);
                oscard[1] = golfie;
                zuuluu['children'] = oscard;
                entity = report.bind(michal)(tangon, zuuluu);
 521:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            oscard = this;
            michal = _closure1_slot20;
            entity = oscard.context;
            tangon = undefined;
            verify = michal.bind(tangon)(entity);
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            option = _closure1_slot17;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            report = 16;
            report = offset[report];
            report = golfie.bind(tangon)(report);
            golfie = report.Form;
            report = {};
            verify = verify.form;
            report['style'] = verify;
            verify = oscard.props;
            verify = verify.contentContainerStyle;
            report['contentContainerStyle'] = verify;
            verify = oscard.renderWebhooks;
            verify = verify.bind(oscard)();
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            oscard = oscard.props;
            oscard = oscard.navScrim;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot21 = golfie;
    tangon = 24;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeContext;
    golfie['contextType'] = tangon;
    tangon = new Array(0);
    var _closure1_slot22 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConnectedWebhooksOverview
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            var _closure2_slot0 = option;
            kiloes = entity.guildId;
            var _closure2_slot1 = kiloes;
            yankee = entity.contentContainerStyle;
            offset = entity.navScrim;
            verify = entity.webhookType;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 20;
            tangon = entity[golfie];
            backup = zuuluu.bind(report)(tangon);
            foxtra = backup.useStateFromStores;
            tangon = _closure1_slot9;
            romeon = new Array(1);
            romeon[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = foxtra.bind(backup)(romeon, tangon);
            var _closure2_slot2 = foxtra;
            entity = entity[golfie];
            romeon = zuuluu.bind(report)(entity);
            tangon = romeon.useStateFromStores;
            entity = _closure1_slot10;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.getGuild;
                    entity = _closure2_slot2;
                    report = null;
                    oscard = report == entity;
                    entity = undefined;
                    if(oscard) { _fun00018_ip = 39; continue _fun00017 }
 30:
                    oscard = _closure2_slot2;
                    entity = oscard.guild_id;
 39:
                    if(!(report == entity)) { _fun00018_ip = 47; continue _fun00017 }
 43:
                    entity = _closure2_slot1;
 47:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            backup = tangon.bind(romeon)(zuuluu, entity);
            entity = null;
            tangon = entity == backup;
            zuuluu = undefined;
            if(tangon) { _fun00016_ip = 163; continue _fun00015 }
 158:
            zuuluu = backup.id;
 163:
            if(!(entity != zuuluu)) { _fun00016_ip = 170; continue _fun00015 }
 167:
            kiloes = zuuluu;
 170:
            _closure2_slot3 = kiloes;
            tangon = entity == foxtra;
            zuuluu = undefined;
            if(tangon) { _fun00016_ip = 188; continue _fun00015 }
 183:
            zuuluu = foxtra.id;
 188:
            if(!(entity != zuuluu)) { _fun00016_ip = 195; continue _fun00015 }
 192:
            option = zuuluu;
 195:
            _closure2_slot4 = option;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            romeon = tangon.bind(report)(zuuluu);
            golfie = romeon.useStateFromStoresArray;
            zuuluu = _closure1_slot12;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00020_ip = 21; continue _fun00019 }
 13:
                    entity = _closure2_slot4;
                    if(!(zuuluu == entity)) { _fun00020_ip = 64; continue _fun00019 }
 21:
                    entity = _closure2_slot3;
                    if(!(zuuluu == entity)) { _fun00020_ip = 38; continue _fun00019 }
 29:
                    entity = _closure1_slot22;
                    _fun00020_ip = 62; continue _fun00019;
 38:
                    report = _closure1_slot12;
                    tangon = report.getWebhooksForGuild;
                    zuuluu = _closure2_slot3;
                    entity = tangon.bind(report)(zuuluu);
 62:
                    _fun00020_ip = 93; continue _fun00019;
 64:
                    report = _closure1_slot12;
                    tangon = report.getWebhooksForChannel;
                    zuuluu = _closure2_slot3;
                    michal = _closure2_slot4;
                    entity = tangon.bind(report)(zuuluu, michal);
 93:
                    return entity;
                }
            };
            romeon = golfie.bind(romeon)(tangon, zuuluu);
            golfie = _closure1_slot8;
            tangon = golfie.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = kiloes;
            zuuluu[1] = option;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00022_ip = 21; continue _fun00021 }
 13:
                    michal = _closure2_slot4;
                    if(!(zuuluu == michal)) { _fun00022_ip = 71; continue _fun00021 }
 21:
                    michal = _closure2_slot3;
                    if(!(zuuluu != michal)) { _fun00022_ip = 116; continue _fun00021 }
 29:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 25;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.fetchForGuild;
                    michal = _closure2_slot3;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00022_ip = 116; continue _fun00021;
 71:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 25;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.fetchForChannel;
                    michal = _closure2_slot3;
                    entity = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(michal, entity);
 116:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(golfie)(michal, zuuluu);
            michal = entity != backup;
            entity = null;
            if(!michal) { _fun00016_ip = 376; continue _fun00015 }
 290:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 26;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.RedesignCompat;
            michal = {};
            option = _closure1_slot17;
            golfie = _closure1_slot21;
            oscard = {};
            oscard['guild'] = backup;
            oscard['channel'] = foxtra;
            oscard['webhooks'] = romeon;
            oscard['contentContainerStyle'] = yankee;
            oscard['navScrim'] = offset;
            oscard['webhookType'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 376:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();