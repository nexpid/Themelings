// app/modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: ChannelPermissionSettingsBasicView
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            var _closure2_slot0 = zuuluu;
            vacuum = entity.privateToggleState;
            var _closure2_slot1 = vacuum;
            entity = entity.setPrivateToggleState;
            var _closure2_slot2 = entity;
            report = undefined;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            entity = function(argFoo) { // Original name: renderRowItem
                entity = argFoo;
                report = _closure1_slot21;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 22;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                michal['item'] = entity;
                oscard = _closure2_slot0;
                golfie = oscard.id;
                michal['channelId'] = golfie;
                golfie = true;
                michal['showType'] = golfie;
                michal['showRemove'] = golfie;
                oscard = oscard.guild_id;
                michal['guildId'] = oscard;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            var _closure2_slot8 = entity;
            entity = _closure1_slot24;
            kiloes = entity.bind(report)();
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 15;
            entity = oscard[entity];
            michal = tangon.bind(report)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot3 = entity;
            michal = 16;
            michal = oscard[michal];
            golfie = tangon.bind(report)(michal);
            oscard = golfie.useStateFromStoresObject;
            michal = _closure1_slot12;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot0;
                    entity = report.getGuildId;
                    entity = entity.bind(report)();
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = {};
                    entity['guild'] = zuuluu;
                    michal = null;
                    report = michal != zuuluu;
                    michal = undefined;
                    if(!report) { _fun00004_ip = 71; continue _fun00003 }
 51:
                    report = _closure1_slot12;
                    tangon = report.getRoles;
                    zuuluu = zuuluu.id;
                    michal = tangon.bind(report)(zuuluu);
 71:
                    entity['guildRoles'] = michal;
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(tangon, michal);
            yankee = michal.guild;
            var _closure2_slot4 = yankee;
            michal = michal.guildRoles;
            var _closure2_slot5 = michal;
            golfie = _closure1_slot6;
            oscard = golfie.useLayoutEffect;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                tangon = _closure2_slot3;
                zuuluu = tangon.setOptions;
                michal = {};
                entity = undefined;
                michal['headerRight'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = oscard.bind(golfie)(entity, tangon);
            golfie = _closure1_slot6;
            oscard = golfie.useMemo;
            tangon = new Array(3);
            tangon[0] = yankee;
            tangon[1] = michal;
            tangon[2] = zuuluu;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot4;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00006_ip = 82; continue _fun00005 }
 13:
                    michal = _closure2_slot5;
                    if(!(zuuluu != michal)) { _fun00006_ip = 82; continue _fun00005 }
 21:
                    tangon = _closure1_slot2;
                    zuuluu = _closure1_slot3;
                    michal = 17;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    oscard = tangon.bind(michal)(zuuluu);
                    report = oscard.getExistingRolesRows;
                    offset = _closure2_slot4;
                    verify = _closure2_slot5;
                    michal = _closure2_slot0;
                    golfie = michal.accessPermissions;
                    yankee = oscard;
                    option = michal;
                    entity = yankee[report](offset, verify, option, golfie, oscard);
                    _fun00006_ip = 86; continue _fun00005;
 82:
                    entity = new Array(0);
 86:
                    return entity;
                }
            };
            result = oscard.bind(golfie)(entity, tangon);
            entity = null;
            if(!(entity != yankee)) { _fun00002_ip = 1547; continue _fun00001 }
 240:
            if(!(entity != michal)) { _fun00002_ip = 1547; continue _fun00001 }
 247:
            michal = zuuluu.isCategory;
            sequen = michal.bind(zuuluu)();
            oscard = _closure1_slot11;
            tangon = oscard.getMemberIds;
            golfie = entity == yankee;
            michal = undefined;
            if(golfie) { _fun00002_ip = 281; continue _fun00001 }
 276:
            michal = yankee.id;
 281:
            foxtra = tangon.bind(oscard)(michal);
            oscard = _closure1_slot2;
            michal = _closure1_slot3;
            tangon = 17;
            golfie = michal[tangon];
            romeon = oscard.bind(report)(golfie);
            option = romeon.getExistingMembersRows;
            target = zuuluu.accessPermissions;
            whisks = romeon;
            limora = foxtra;
            sierra = zuuluu;
            status = yankee;
            romeon = whisks[option](limora, sierra, status, target, papara);
            golfie = function() {
                tangon = _closure1_slot5;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00008_ip = 257; continue _fun00007 }
 10:
                            oscard = _closure1_slot2;
                            report = _closure1_slot3;
                            option = 17;
                            michal = report[option];
                            zuuluu = undefined;
                            verify = oscard.bind(zuuluu)(michal);
                            golfie = verify.isPrivateGuildChannel;
                            offset = _closure2_slot0;
                            golfie = golfie.bind(verify)(offset);
                            verify = offset.accessPermissions;
                            report = report[option];
                            oscard = oscard.bind(zuuluu)(report);
                            report = oscard.flipEveryonePermission;
                            golfie = report.bind(oscard)(offset, verify, golfie);
                            oscard = _closure1_slot14;
                            report = oscard.getCurrentUser;
                            yankee = report.bind(oscard)();
                            romeon = _closure1_slot13;
                            offset = romeon.can;
                            report = _closure1_slot17;
                            oscard = report.ADMINISTRATOR;
                            report = _closure2_slot4;
                            oscard = offset.bind(romeon)(oscard, report);
                            report = _closure2_slot7;
                            if(report) { _fun00008_ip = 137; continue _fun00007 }
 131:
                            offset = null;
                            report = offset == yankee;
 137:
                            if(report) { _fun00008_ip = 143; continue _fun00007 }
 140:
                            report = oscard;
 143:
                            if(report) { _fun00008_ip = 192; continue _fun00007 }
 146:
                            oscard = _closure1_slot2;
                            report = _closure1_slot3;
                            report = report[option];
                            option = oscard.bind(zuuluu)(report);
                            oscard = option.grantUserChannelAccess;
                            report = _closure2_slot0;
                            report = oscard.bind(option)(report, verify);
                            SaveGenerator(address=183);
 181:
                            return report;
 183:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!oscard) { _fun00008_ip = 192; continue _fun00007 }
 189:
                            return report;
 192:
                            report = _closure1_slot0;
                            oscard = _closure1_slot3;
                            tangon = 18;
                            tangon = oscard[tangon];
                            oscard = report.bind(zuuluu)(tangon);
                            report = oscard.savePermissionUpdates;
                            michal = _closure2_slot0;
                            tangon = michal.id;
                            michal = new Array(1);
                            michal[0] = golfie;
                            michal = report.bind(oscard)(tangon, michal);
                            SaveGenerator(address=245);
 243:
                            return michal;
 245:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00008_ip = 254; continue _fun00007 }
 251:
                            return zuuluu;
 254:
                            return michal;
 257:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            golfie = golfie.bind(report)();
            _closure2_slot6 = golfie;
            golfie = function() {
                tangon = _closure1_slot5;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00010_ip = 491; continue _fun00009 }
 10:
                            michal = _closure2_slot0;
                            zuuluu = michal.guild_id;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00010_ip = 105; continue _fun00009 }
 28:
                            michal = _closure2_slot1;
                            if(michal) { _fun00010_ip = 105; continue _fun00009 }
 35:
                            report = _closure1_slot0;
                            tangon = _closure1_slot3;
                            zuuluu = 19;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            golfie = report.bind(zuuluu)(tangon);
                            report = golfie.checkDefaultChannelThresholdMetAfterChannelPermissionDeny;
                            tangon = _closure2_slot0;
                            michal = _closure1_slot17;
                            michal = michal.VIEW_CHANNEL;
                            michal = report.bind(golfie)(tangon, michal);
                            SaveGenerator(address=90);
 88:
                            return michal;
 90:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00010_ip = 102; continue _fun00009 }
 96:
                            if(michal) { _fun00010_ip = 105; continue _fun00009 }
 99:
                            return zuuluu;
 102:
                            return michal;
 105:
                            golfie = _closure2_slot1;
                            verify = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            yankee = 20;
                            tangon = zuuluu[yankee];
                            michal = undefined;
                            tangon = verify.bind(michal)(tangon);
                            report = tangon.intl;
                            tangon = report.string;
                            zuuluu = zuuluu[yankee];
                            zuuluu = verify.bind(michal)(zuuluu);
                            zuuluu = zuuluu.t;
                            if(golfie) { _fun00010_ip = 176; continue _fun00009 }
 161:
                            golfie = zuuluu.47gQYG;
                            offset = tangon.bind(report)(golfie);
                            _fun00010_ip = 189; continue _fun00009;
 176:
                            zuuluu = zuuluu.vw48TU;
                            offset = tangon.bind(report)(zuuluu);
 189:
                            tangon = _closure2_slot1;
                            verify = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            report = zuuluu[yankee];
                            report = verify.bind(michal)(report);
                            golfie = report.intl;
                            report = golfie.format;
                            zuuluu = zuuluu[yankee];
                            zuuluu = verify.bind(michal)(zuuluu);
                            zuuluu = zuuluu.t;
                            if(tangon) { _fun00010_ip = 269; continue _fun00009 }
 237:
                            verify = zuuluu.rKzX1N;
                            tangon = {};
                            romeon = _closure2_slot0;
                            romeon = romeon.name;
                            tangon['channelName'] = romeon;
                            verify = report.bind(golfie)(verify, tangon);
                            _fun00010_ip = 299; continue _fun00009;
 269:
                            tangon = zuuluu.hGzPn5;
                            zuuluu = {};
                            romeon = _closure2_slot0;
                            romeon = romeon.name;
                            zuuluu['channelName'] = romeon;
                            verify = report.bind(golfie)(tangon, zuuluu);
 299:
                            tangon = _closure2_slot2;
                            zuuluu = _closure2_slot1;
                            zuuluu = !zuuluu;
                            zuuluu = tangon.bind(michal)(zuuluu);
                            tangon = _closure1_slot1;
                            golfie = _closure1_slot3;
                            zuuluu = 21;
                            zuuluu = golfie[zuuluu];
                            report = tangon.bind(michal)(zuuluu);
                            tangon = report.show;
                            zuuluu = {};
                            zuuluu['title'] = offset;
                            zuuluu['body'] = verify;
                            offset = _closure1_slot0;
                            option = golfie[yankee];
                            option = offset.bind(michal)(option);
                            romeon = option.intl;
                            verify = romeon.string;
                            option = golfie[yankee];
                            option = offset.bind(michal)(option);
                            option = option.t;
                            option = option.ETE/oK;
                            option = verify.bind(romeon)(option);
                            zuuluu['cancelText'] = option;
                            option = golfie[yankee];
                            option = offset.bind(michal)(option);
                            verify = option.intl;
                            option = verify.string;
                            golfie = golfie[yankee];
                            golfie = offset.bind(michal)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.p89ACg;
                            golfie = option.bind(verify)(golfie);
                            zuuluu['confirmText'] = golfie;
                            oscard = _closure2_slot6;
                            zuuluu['onConfirm'] = oscard;
                            oscard = false;
                            zuuluu['hideActionSheet'] = oscard;
                            oscard = function() { // Original name: onCancel
                                zuuluu = _closure2_slot2;
                                report = _closure1_slot2;
                                tangon = _closure1_slot3;
                                entity = 17;
                                tangon = tangon[entity];
                                entity = undefined;
                                report = report.bind(entity)(tangon);
                                tangon = report.isPrivateGuildChannel;
                                michal = _closure2_slot0;
                                michal = tangon.bind(report)(michal);
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            zuuluu['onCancel'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
                            return michal;
 491:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            ctrled = golfie.bind(report)();
            tangon = michal[tangon];
            golfie = oscard.bind(report)(tangon);
            tangon = golfie.isPrivateGuildChannel;
            option = tangon.bind(golfie)(zuuluu);
            _closure2_slot7 = option;
            tangon = 23;
            golfie = michal[tangon];
            backup = oscard.bind(report)(golfie);
            foxtra = backup.canEveryoneRole;
            golfie = _closure1_slot17;
            golfie = golfie.VIEW_CHANNEL;
            foxtra = foxtra.bind(backup)(golfie, yankee);
            tangon = michal[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.canEveryoneRole;
            tangon = _closure1_slot17;
            tangon = tangon.ADMINISTRATOR;
            golfie = oscard.bind(golfie)(tangon, yankee);
            zuuluu = zuuluu.type;
            yankee = _closure1_slot0;
            sizing = 20;
            tangon = michal[sizing];
            tangon = yankee.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            michal = michal[sizing];
            michal = yankee.bind(report)(michal);
            michal = michal.t;
            michal = michal.hfbjIC;
            tangon = tangon.bind(oscard)(michal);
            michal = _closure1_slot16;
            michal = michal.GUILD_CATEGORY;
            if(!(zuuluu !== michal)) { _fun00002_ip = 590; continue _fun00001 }
 519:
            michal = _closure1_slot16;
            michal = michal.GUILD_VOICE;
            echoed = tangon;
            if(!(zuuluu === michal)) { _fun00002_ip = 642; continue _fun00001 }
 536:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            zuuluu = michal[sizing];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = michal[sizing];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.cLjvKi;
            echoed = zuuluu.bind(tangon)(michal);
            _fun00002_ip = 642; continue _fun00001;
 590:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            zuuluu = michal[sizing];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = michal[sizing];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.RQUk6+;
            echoed = zuuluu.bind(tangon)(michal);
 642:
            tangon = _closure1_slot22;
            update = _closure1_slot0;
            config = _closure1_slot3;
            michal = 24;
            michal = config[michal];
            michal = update.bind(report)(michal);
            zuuluu = michal.Stack;
            michal = {};
            backup = {};
            yankee = _closure1_slot1;
            oscard = 14;
            output = config[oscard];
            output = yankee.bind(report)(output);
            output = output.spacing;
            output = output.PX_16;
            backup['paddingHorizontal'] = output;
            michal['style'] = backup;
            oscard = config[oscard];
            oscard = yankee.bind(report)(oscard);
            oscard = oscard.spacing;
            oscard = oscard.PX_16;
            michal['spacing'] = oscard;
            output = _closure1_slot21;
            yankee = 25;
            oscard = config[yankee];
            oscard = update.bind(report)(oscard);
            backup = oscard.TableRowGroup;
            oscard = {};
            oscard['title'] = echoed;
            source = _closure1_slot21;
            echoed = 26;
            echoed = config[echoed];
            echoed = update.bind(report)(echoed);
            update = echoed.TableSwitchRow;
            echoed = {};
            papara = _closure1_slot0;
            config = _closure1_slot3;
            record = config[sizing];
            record = papara.bind(report)(record);
            cntext = record.intl;
            record = cntext.string;
            config = config[sizing];
            config = papara.bind(report)(config);
            config = config.t;
            if(sequen) { _fun00002_ip = 842; continue _fun00001 }
 829:
            sequen = config.aUI70t;
            sequen = record.bind(cntext)(sequen);
            _fun00002_ip = 853; continue _fun00001;
 842:
            config = config.lEPAZ2;
            sequen = record.bind(cntext)(config);
 853:
            echoed['label'] = sequen;
            echoed['value'] = vacuum;
            echoed['onValueChange'] = ctrled;
            echoed = source.bind(report)(update, echoed);
            oscard['children'] = echoed;
            backup = output.bind(report)(backup, oscard);
            oscard = new Array(6);
            oscard[0] = backup;
            backup = golfie;
            if(!backup) { _fun00002_ip = 1039; continue _fun00001 }
 899:
            update = _closure1_slot21;
            echoed = _closure1_slot7;
            output = {};
            source = kiloes.adminWarning;
            output['style'] = source;
            vacuum = _closure1_slot21;
            ctrled = _closure1_slot1;
            sequen = _closure1_slot3;
            config = 27;
            source = sequen[config];
            ctrled = ctrled.bind(report)(source);
            source = {};
            cntext = _closure1_slot0;
            config = sequen[config];
            config = cntext.bind(report)(config);
            config = config.HelpMessageTypes;
            config = config.WARNING;
            source['messageType'] = config;
            config = sequen[sizing];
            config = cntext.bind(report)(config);
            record = config.intl;
            config = record.string;
            sequen = sequen[sizing];
            sequen = cntext.bind(report)(sequen);
            sequen = sequen.t;
            sequen = sequen.5f3HIC;
            sequen = config.bind(record)(sequen);
            source['children'] = sequen;
            source = vacuum.bind(report)(ctrled, source);
            output['children'] = source;
            backup = update.bind(report)(echoed, output);
 1039:
            oscard[1] = backup;
            golfie = !golfie;
            if(!golfie) { _fun00002_ip = 1052; continue _fun00001 }
 1049:
            golfie = !foxtra;
 1052:
            if(!golfie) { _fun00002_ip = 1058; continue _fun00001 }
 1055:
            golfie = !option;
 1058:
            if(!golfie) { _fun00002_ip = 1206; continue _fun00001 }
 1064:
            backup = _closure1_slot21;
            foxtra = _closure1_slot7;
            option = {};
            kiloes = kiloes.adminWarning;
            option['style'] = kiloes;
            echoed = _closure1_slot21;
            output = _closure1_slot1;
            update = _closure1_slot3;
            source = 27;
            kiloes = update[source];
            output = output.bind(report)(kiloes);
            kiloes = {};
            vacuum = _closure1_slot0;
            source = update[source];
            source = vacuum.bind(report)(source);
            source = source.HelpMessageTypes;
            source = source.WARNING;
            kiloes['messageType'] = source;
            source = update[sizing];
            source = vacuum.bind(report)(source);
            ctrled = source.intl;
            source = ctrled.string;
            update = update[sizing];
            update = vacuum.bind(report)(update);
            update = update.t;
            update = update.ZAk4Q0;
            update = source.bind(ctrled)(update);
            kiloes['children'] = update;
            kiloes = echoed.bind(report)(output, kiloes);
            option['children'] = kiloes;
            golfie = backup.bind(report)(foxtra, option);
 1206:
            oscard[2] = golfie;
            kiloes = _closure1_slot21;
            option = _closure1_slot0;
            golfie = _closure1_slot3;
            foxtra = golfie[yankee];
            foxtra = option.bind(report)(foxtra);
            backup = foxtra.TableRowGroup;
            foxtra = {};
            update = _closure1_slot21;
            output = 28;
            output = golfie[output];
            output = option.bind(report)(output);
            echoed = output.TableRow;
            output = {};
            source = true;
            output['arrow'] = source;
            vacuum = _closure1_slot21;
            source = 29;
            source = golfie[source];
            source = option.bind(report)(source);
            ctrled = source.CirclePlusIcon;
            source = {};
            source = vacuum.bind(report)(ctrled, source);
            output['icon'] = source;
            source = golfie[sizing];
            source = option.bind(report)(source);
            vacuum = source.intl;
            ctrled = vacuum.string;
            source = golfie[sizing];
            source = option.bind(report)(source);
            source = source.t;
            source = source.dMJ3Y2;
            source = ctrled.bind(vacuum)(source);
            output['label'] = source;
            source = function() { // Original name: onPress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 53; continue _fun00011 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 30;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.openAddMembersActionSheet;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            output['onPress'] = source;
            output = update.bind(report)(echoed, output);
            foxtra['children'] = output;
            foxtra = kiloes.bind(report)(backup, foxtra);
            oscard[3] = foxtra;
            kiloes = _closure1_slot21;
            foxtra = golfie[yankee];
            foxtra = option.bind(report)(foxtra);
            backup = foxtra.TableRowGroup;
            foxtra = {};
            output = golfie[sizing];
            output = option.bind(report)(output);
            echoed = output.intl;
            output = echoed.string;
            sizing = golfie[sizing];
            sizing = option.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.ES4CCw;
            sizing = output.bind(echoed)(sizing);
            foxtra['title'] = sizing;
            output = result.map;
            sizing = function(argFoo) {
                zuuluu = _closure2_slot8;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            sizing = output.bind(result)(sizing);
            foxtra['children'] = sizing;
            foxtra = kiloes.bind(report)(backup, foxtra);
            oscard[4] = foxtra;
            verify = _closure1_slot21;
            golfie = golfie[yankee];
            golfie = option.bind(report)(golfie);
            option = golfie.TableRowGroup;
            golfie = {};
            yankee = romeon.map;
            offset = function(argFoo) {
                zuuluu = _closure2_slot8;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            offset = yankee.bind(romeon)(offset);
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[5] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1547:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: onBack
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 21;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.close;
        entity = entity.bind(michal)();
        entity = false;
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    offset = 0;
    tangon = oscard[offset];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    verify = 1;
    tangon = oscard[verify];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    option = 2;
    tangon = oscard[option];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot7 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SettingMode;
    var _closure1_slot15 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelTypes;
    var _closure1_slot16 = golfie;
    golfie = tangon.Permissions;
    var _closure1_slot17 = golfie;
    golfie = tangon.AnalyticEvents;
    var _closure1_slot18 = golfie;
    golfie = tangon.ChannelSettingsSections;
    var _closure1_slot19 = golfie;
    tangon = tangon.SettingsPaneTypes;
    var _closure1_slot20 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot21 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot22 = tangon;
    tangon = {};
    tangon['BASIC'] = offset;
    golfie = 'BASIC';
    tangon[offset] = golfie;
    tangon['ADVANCED'] = verify;
    golfie = 'ADVANCED';
    tangon[verify] = golfie;
    tangon['MODERATORS'] = option;
    golfie = 'MODERATORS';
    tangon[option] = golfie;
    var _closure1_slot23 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'paddingTop': 16};
    offset = 14;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_SECONDARY;
    verify['backgroundColor'] = romeon;
    tangon['container'] = verify;
    verify = {'marginTop': 16, 'flex': 1};
    tangon['content'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_12;
    verify['marginTop'] = offset;
    tangon['adminWarning'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot24 = tangon;
    tangon = 37;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: EasyChannelPermissionSettings
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            var _closure2_slot0 = zuuluu;
            tangon = entity.origin;
            var _closure2_slot1 = tangon;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 31;
            entity = oscard[entity];
            option = zuuluu.bind(report)(entity);
            golfie = option.useNavigatorBackPressHandler;
            entity = _closure1_slot26;
            entity = golfie.bind(option)(entity);
            entity = _closure1_slot24;
            offset = entity.bind(report)();
            entity = 16;
            golfie = oscard[entity];
            romeon = zuuluu.bind(report)(golfie);
            verify = romeon.useStateFromStores;
            golfie = _closure1_slot10;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = verify.bind(romeon)(option, golfie);
            var _closure2_slot2 = sizing;
            entity = oscard[entity];
            golfie = zuuluu.bind(report)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = _closure1_slot9;
                entity = entity.advancedMode;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu, entity);
            golfie = _closure1_slot6;
            oscard = golfie.useState;
            entity = null;
            if(!(entity != sizing)) { _fun00014_ip = 197; continue _fun00013 }
 184:
            option = sizing.isGuildStageVoice;
            option = option.bind(sizing)();
            if(option) { _fun00014_ip = 220; continue _fun00013 }
 197:
            option = _closure1_slot23;
            if(zuuluu) { _fun00014_ip = 212; continue _fun00013 }
 204:
            zuuluu = option.BASIC;
            _fun00014_ip = 218; continue _fun00013;
 212:
            zuuluu = option.ADVANCED;
 218:
            _fun00014_ip = 230; continue _fun00013;
 220:
            option = _closure1_slot23;
            zuuluu = option.MODERATORS;
 230:
            zuuluu = oscard.bind(golfie)(zuuluu);
            foxtra = _closure1_slot4;
            verify = 2;
            zuuluu = foxtra.bind(report)(zuuluu, verify);
            option = 0;
            romeon = zuuluu[option];
            _closure2_slot3 = romeon;
            golfie = 1;
            zuuluu = zuuluu[golfie];
            _closure2_slot4 = zuuluu;
            kiloes = _closure1_slot6;
            backup = kiloes.useState;
            output = _closure1_slot2;
            zuuluu = _closure1_slot3;
            oscard = 17;
            oscard = zuuluu[oscard];
            output = output.bind(report)(oscard);
            oscard = output.isPrivateGuildChannel;
            oscard = oscard.bind(output)(sizing);
            oscard = backup.bind(kiloes)(oscard);
            oscard = foxtra.bind(report)(oscard, verify);
            kiloes = oscard[option];
            backup = oscard[golfie];
            _closure2_slot5 = backup;
            verify = _closure1_slot6;
            golfie = verify.useEffect;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    verify = _closure2_slot1;
                    entity = _closure1_slot19;
                    option = entity.OVERVIEW;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 32;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.trackWithMetadata;
                    michal = _closure1_slot18;
                    zuuluu = michal.SETTINGS_PANE_VIEWED;
                    michal = {};
                    golfie = 'channel';
                    michal['settings_type'] = golfie;
                    golfie = null;
                    if(!(verify === option)) { _fun00016_ip = 85; continue _fun00015 }
 75:
                    option = _closure1_slot20;
                    golfie = option.CHANNEL_SETTINGS;
 85:
                    michal['origin_pane'] = golfie;
                    oscard = _closure1_slot19;
                    oscard = oscard.PERMISSIONS;
                    michal['destination_pane'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            tangon = golfie.bind(verify)(tangon, oscard);
            verify = _closure1_slot6;
            golfie = verify.useCallback;
            oscard = new Array(1);
            oscard[0] = sizing;
            tangon = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure1_slot23;
                    michal = michal.ADVANCED;
                    if(!(zuuluu !== michal)) { _fun00018_ip = 100; continue _fun00017 }
 20:
                    tangon = _closure2_slot5;
                    option = _closure1_slot2;
                    oscard = _closure1_slot3;
                    report = 17;
                    golfie = oscard[report];
                    report = undefined;
                    option = option.bind(report)(golfie);
                    golfie = option.isPrivateGuildChannel;
                    michal = _closure2_slot2;
                    michal = golfie.bind(option)(michal);
                    michal = tangon.bind(report)(michal);
                    tangon = _closure1_slot0;
                    michal = 18;
                    michal = oscard[michal];
                    report = tangon.bind(report)(michal);
                    tangon = report.setAdvancedMode;
                    michal = false;
                    michal = tangon.bind(report)(michal);
                    _fun00018_ip = 135; continue _fun00017;
 100:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(michal);
                    michal = tangon.setAdvancedMode;
                    entity = true;
                    entity = michal.bind(tangon)(entity);
 135:
                    michal = _closure2_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            golfie = golfie.bind(verify)(tangon, oscard);
            foxtra = _closure1_slot0;
            result = 20;
            tangon = zuuluu[result];
            tangon = foxtra.bind(report)(tangon);
            verify = tangon.intl;
            oscard = verify.string;
            tangon = zuuluu[result];
            tangon = foxtra.bind(report)(tangon);
            tangon = tangon.t;
            tangon = tangon.Mw/UDA;
            tangon = oscard.bind(verify)(tangon);
            verify = new Array(2);
            verify[0] = tangon;
            tangon = zuuluu[result];
            tangon = foxtra.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = zuuluu[result];
            zuuluu = foxtra.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.0a6awc;
            zuuluu = tangon.bind(oscard)(zuuluu);
            verify[1] = zuuluu;
            zuuluu = entity == sizing;
            tangon = undefined;
            if(zuuluu) { _fun00014_ip = 522; continue _fun00013 }
 512:
            zuuluu = sizing.isGuildStageVoice;
            tangon = zuuluu.bind(sizing)();
 522:
            zuuluu = true;
            if(!(zuuluu === tangon)) { _fun00014_ip = 592; continue _fun00013 }
 528:
            tangon = verify.push;
            output = _closure1_slot0;
            zuuluu = _closure1_slot3;
            oscard = zuuluu[result];
            oscard = output.bind(report)(oscard);
            foxtra = oscard.intl;
            oscard = foxtra.string;
            zuuluu = zuuluu[result];
            zuuluu = output.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.YIIUJy;
            zuuluu = oscard.bind(foxtra)(zuuluu);
            zuuluu = tangon.bind(verify)(zuuluu);
 592:
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 33;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useSegmentedControlState;
            zuuluu = {};
            zuuluu['pageWidth'] = option;
            zuuluu['defaultIndex'] = romeon;
            zuuluu['onSetActiveIndex'] = golfie;
            option = verify.map;
            golfie = function(argFoo) {
                michal = argFoo;
                entity = {};
                entity['id'] = michal;
                entity['label'] = michal;
                michal = null;
                entity['page'] = michal;
                return entity;
            };
            golfie = option.bind(verify)(golfie);
            zuuluu['items'] = golfie;
            result = tangon.bind(oscard)(zuuluu);
            oscard = _closure1_slot6;
            tangon = oscard.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = sizing;
            zuuluu[1] = romeon;
            michal = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 32;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.trackWithMetadata;
                    michal = _closure1_slot18;
                    zuuluu = michal.CHANNEL_PERMISSIONS_PAGE_VIEWED;
                    michal = {};
                    verify = _closure2_slot3;
                    option = _closure1_slot23;
                    option = option.BASIC;
                    if(!(verify !== option)) { _fun00020_ip = 76; continue _fun00019 }
 64:
                    option = _closure1_slot15;
                    option = option.ADVANCED;
                    _fun00020_ip = 86; continue _fun00019;
 76:
                    verify = _closure1_slot15;
                    option = verify.BASIC;
 86:
                    michal['mode'] = option;
                    option = _closure1_slot2;
                    verify = _closure1_slot3;
                    golfie = 17;
                    golfie = verify[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = option.isPrivateGuildChannel;
                    oscard = _closure2_slot2;
                    oscard = golfie.bind(option)(oscard);
                    michal['channel_is_private'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            michal = tangon.bind(oscard)(michal, zuuluu);
            michal = entity != sizing;
            entity = null;
            if(!michal) { _fun00014_ip = 1016; continue _fun00013 }
 708:
            tangon = _closure1_slot22;
            zuuluu = _closure1_slot7;
            michal = {};
            oscard = offset.container;
            michal['style'] = oscard;
            option = _closure1_slot21;
            golfie = _closure1_slot7;
            oscard = {};
            verify = {};
            output = _closure1_slot1;
            echoed = _closure1_slot3;
            foxtra = 14;
            foxtra = echoed[foxtra];
            foxtra = output.bind(report)(foxtra);
            foxtra = foxtra.spacing;
            foxtra = foxtra.PX_12;
            verify['paddingHorizontal'] = foxtra;
            oscard['style'] = verify;
            output = _closure1_slot21;
            foxtra = _closure1_slot0;
            verify = 34;
            verify = echoed[verify];
            verify = foxtra.bind(report)(verify);
            foxtra = verify.SegmentedControl;
            verify = {};
            verify['state'] = result;
            verify = output.bind(report)(foxtra, verify);
            oscard['children'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot21;
            option = _closure1_slot8;
            golfie = {};
            offset = offset.content;
            golfie['style'] = offset;
            offset = _closure1_slot23;
            offset = offset.BASIC;
            if(!(romeon !== offset)) { _fun00014_ip = 962; continue _fun00013 }
 867:
            offset = _closure1_slot23;
            offset = offset.MODERATORS;
            if(!(romeon !== offset)) { _fun00014_ip = 924; continue _fun00013 }
 881:
            foxtra = _closure1_slot21;
            romeon = _closure1_slot1;
            output = _closure1_slot3;
            offset = 36;
            offset = output[offset];
            romeon = romeon.bind(report)(offset);
            offset = {};
            output = sizing.id;
            offset['channelId'] = output;
            offset = foxtra.bind(report)(romeon, offset);
            _fun00014_ip = 960; continue _fun00013;
 924:
            output = _closure1_slot21;
            foxtra = _closure1_slot1;
            result = _closure1_slot3;
            romeon = 35;
            romeon = result[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon['channel'] = sizing;
            offset = output.bind(report)(foxtra, romeon);
 960:
            _fun00014_ip = 992; continue _fun00013;
 962:
            foxtra = _closure1_slot21;
            romeon = _closure1_slot25;
            yankee = {};
            yankee['channel'] = sizing;
            yankee['privateToggleState'] = kiloes;
            yankee['setPrivateToggleState'] = backup;
            offset = foxtra.bind(report)(romeon, yankee);
 992:
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1016:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();