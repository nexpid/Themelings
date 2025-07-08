// app/modules/settings/native/MuteSettingsActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserNotificationSettings;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/settings/native/MuteSettingsActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: MuteSettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            var _closure2_slot0 = zuuluu;
            verify = entity.channelId;
            var _closure2_slot1 = verify;
            tangon = entity.onOptionPress;
            var _closure2_slot2 = tangon;
            michal = _closure1_slot5;
            entity = michal.getGuild;
            michal = entity.bind(michal)(zuuluu);
            var _closure2_slot3 = michal;
            golfie = _closure1_slot4;
            entity = golfie.getChannel;
            backup = entity.bind(golfie)(verify);
            var _closure2_slot4 = backup;
            golfie = _closure1_slot3;
            offset = golfie.useMemo;
            option = new Array(1);
            option[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getMuteSettings;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = offset.bind(golfie)(entity, option);
            foxtra = entity.muteConfig;
            entity = entity.muted;
            offset = golfie.useCallback;
            option = new Array(3);
            option[0] = verify;
            option[1] = zuuluu;
            option[2] = tangon;
            tangon = function(argFoo) {
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 10;
                zuuluu = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.hideActionSheet;
                zuuluu = zuuluu.bind(report)();
                zuuluu = _closure1_slot0;
                michal = 9;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.handleMuteSettingPress;
                michal = {};
                oscard = _closure2_slot1;
                michal['channelId'] = oscard;
                oscard = _closure2_slot0;
                michal['guildId'] = oscard;
                oscard = argFoo;
                michal['muteDurationSeconds'] = oscard;
                report = _closure2_slot2;
                michal['onOptionPress'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = offset.bind(golfie)(tangon, option);
            var _closure2_slot5 = tangon;
            option = golfie.useCallback;
            tangon = new Array(2);
            tangon[0] = verify;
            tangon[1] = zuuluu;
            zuuluu = function() {
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 10;
                zuuluu = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.hideActionSheet;
                zuuluu = zuuluu.bind(report)();
                zuuluu = _closure1_slot0;
                michal = 9;
                michal = tangon[michal];
                report = zuuluu.bind(entity)(michal);
                tangon = report.handleUnmutePress;
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            result = option.bind(golfie)(zuuluu, tangon);
            option = golfie.useMemo;
            tangon = new Array(2);
            tangon[0] = backup;
            tangon[1] = michal;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getMuteSettingLabel;
                michal = _closure2_slot4;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            offset = option.bind(golfie)(zuuluu, tangon);
            tangon = golfie.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = backup;
            zuuluu[1] = michal;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getMuteSettingSublabel;
                michal = _closure2_slot4;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            verify = tangon.bind(golfie)(michal, zuuluu);
            michal = null;
            if(!(michal != backup)) { _fun00002_ip = 241; continue _fun00001 }
 238:
            if(entity) { _fun00002_ip = 327; continue _fun00001 }
 241:
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 9;
            entity = golfie[entity];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(entity);
            entity = zuuluu.getMuteOptions;
            option = entity.bind(zuuluu)();
            zuuluu = _closure1_slot9;
            entity = 11;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRowGroup;
            entity = {};
            golfie = option.map;
            oscard = function(argFoo) {
                entity = argFoo;
                report = entity.label;
                entity = entity.duration;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot9;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 12;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.TableRow;
                entity = {};
                entity['label'] = report;
                oscard = function() { // Original name: onPress
                    zuuluu = _closure2_slot5;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity['onPress'] = oscard;
                entity = tangon.bind(zuuluu)(michal, entity, report);
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            entity['children'] = oscard;
            oscard = zuuluu.bind(tangon)(michal, entity);
            _fun00002_ip = 659; continue _fun00001;
 327:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot10;
            michal = {};
            romeon = _closure1_slot9;
            sequen = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            golfie = option[entity];
            entity = undefined;
            golfie = sequen.bind(entity)(golfie);
            kiloes = golfie.TableRowGroup;
            golfie = {};
            yankee = 12;
            yankee = option[yankee];
            yankee = sequen.bind(entity)(yankee);
            output = yankee.TableRow;
            sizing = {};
            yankee = _closure1_slot1;
            echoed = 13;
            echoed = option[echoed];
            update = yankee.bind(entity)(echoed);
            echoed = {};
            cntext = true;
            echoed['disableColor'] = cntext;
            source = 14;
            source = option[source];
            source = yankee.bind(entity)(source);
            echoed['source'] = source;
            echoed = romeon.bind(entity)(update, echoed);
            sizing['icon'] = echoed;
            echoed = 8;
            update = option[echoed];
            update = sequen.bind(entity)(update);
            ctrled = update.intl;
            source = ctrled.format;
            echoed = option[echoed];
            echoed = sequen.bind(entity)(echoed);
            echoed = echoed.t;
            update = echoed.eC+9rq;
            echoed = {};
            vacuum = 15;
            vacuum = option[vacuum];
            record = sequen.bind(entity)(vacuum);
            config = record.computeChannelName;
            status = _closure1_slot7;
            target = _closure1_slot6;
            limora = record;
            sierra = backup;
            papara = true;
            vacuum = limora[config](sierra, status, target, papara, cntext);
            echoed['name'] = vacuum;
            echoed = source.bind(ctrled)(update, echoed);
            sizing['label'] = echoed;
            sizing['onPress'] = result;
            sizing = romeon.bind(entity)(output, sizing);
            golfie['children'] = sizing;
            kiloes = romeon.bind(entity)(kiloes, golfie);
            golfie = new Array(2);
            golfie[0] = kiloes;
            sizing = 16;
            option = option[sizing];
            yankee = yankee.bind(entity)(option);
            option = {};
            option['muteConfig'] = foxtra;
            foxtra = backup.isPrivate;
            foxtra = foxtra.bind(backup)();
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[sizing];
            backup = kiloes.bind(entity)(backup);
            backup = backup.MuteSettingType;
            if(foxtra) { _fun00002_ip = 629; continue _fun00001 }
 621:
            foxtra = backup.CHANNEL;
            _fun00002_ip = 635; continue _fun00001;
 629:
            foxtra = backup.DM;
 635:
            option['type'] = foxtra;
            option = romeon.bind(entity)(yankee, option);
            golfie[1] = option;
            michal['children'] = golfie;
            oscard = tangon.bind(entity)(zuuluu, michal);
 659:
            tangon = _closure1_slot11;
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 17;
            entity = yankee[entity];
            zuuluu = undefined;
            entity = golfie.bind(zuuluu)(entity);
            michal = entity.ActionSheet;
            entity = {};
            option = _closure1_slot9;
            report = 18;
            report = yankee[report];
            report = golfie.bind(zuuluu)(report);
            golfie = report.BottomSheetTitleHeader;
            report = {};
            report['title'] = offset;
            report['subtitle'] = verify;
            golfie = option.bind(zuuluu)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: MuteSettingsHint
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.isMuted;
            michal = entity.isGuildMuted;
            option = entity.guildMessageNotifications;
            oscard = entity.showVoiceActivityNotificationOptions;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00004_ip = 37; continue _fun00003 }
 35:
            oscard = false;
 37:
            if(zuuluu) { _fun00004_ip = 517; continue _fun00003 }
 46:
            if(michal) { _fun00004_ip = 406; continue _fun00003 }
 52:
            michal = _closure1_slot8;
            michal = michal.NO_MESSAGES;
            if(!(option !== michal)) { _fun00004_ip = 295; continue _fun00003 }
 69:
            michal = _closure1_slot8;
            michal = michal.ALL_MESSAGES;
            if(!(option !== michal)) { _fun00004_ip = 101; continue _fun00003 }
 83:
            michal = _closure1_slot8;
            michal = michal.ONLY_MENTIONS;
            if(!(option !== michal)) { _fun00004_ip = 101; continue _fun00003 }
 97:
            michal = null;
            return michal;
 101:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            romeon = 8;
            zuuluu = michal[romeon];
            zuuluu = golfie.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            michal = michal[romeon];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            if(oscard) { _fun00004_ip = 163; continue _fun00003 }
 148:
            oscard = michal.mUbulZ;
            oscard = zuuluu.bind(report)(oscard);
            _fun00004_ip = 176; continue _fun00003;
 163:
            michal = michal.l3yoAQ;
            oscard = zuuluu.bind(report)(michal);
 176:
            report = _closure1_slot9;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            golfie = _closure1_slot8;
            golfie = golfie.ALL_MESSAGES;
            if(!(option !== golfie)) { _fun00004_ip = 283; continue _fun00003 }
 229:
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            option = golfie[romeon];
            option = yankee.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = golfie[romeon];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.GGAdHR;
            oscard = option.bind(verify)(golfie);
 283:
            michal['children'] = oscard;
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 295:
            report = _closure1_slot9;
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            michal = golfie.bind(tangon)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            oscard = 8;
            option = yankee[oscard];
            option = golfie.bind(tangon)(option);
            verify = option.intl;
            option = verify.format;
            oscard = yankee[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.t;
            golfie = oscard.nRwUIC;
            oscard = {};
            yankee = function(argFoo, argBar) { // Original name: notificationHook
                report = _closure1_slot9;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 7;
                entity = zuuluu[entity];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.Text;
                michal = {'variant': 'text-sm/medium', 'color': 'text-warning'};
                entity = argFoo;
                michal['children'] = entity;
                entity = argBar;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            oscard['notificationHook'] = yankee;
            oscard = option.bind(verify)(golfie, oscard);
            michal['children'] = oscard;
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 406:
            report = _closure1_slot9;
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            michal = golfie.bind(tangon)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            oscard = 8;
            option = yankee[oscard];
            option = golfie.bind(tangon)(option);
            verify = option.intl;
            option = verify.format;
            oscard = yankee[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.t;
            golfie = oscard.O34r19;
            oscard = {};
            offset = function(argFoo, argBar) { // Original name: mutedHook
                report = _closure1_slot9;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 7;
                entity = zuuluu[entity];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.Text;
                michal = {'variant': 'text-sm/medium', 'color': 'text-danger'};
                entity = argFoo;
                michal['children'] = entity;
                entity = argBar;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            oscard['mutedHook'] = offset;
            oscard = option.bind(verify)(golfie, oscard);
            michal['children'] = oscard;
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 517:
            zuuluu = _closure1_slot9;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 7;
            entity = verify[entity];
            entity = option.bind(tangon)(entity);
            michal = entity.Text;
            entity = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            report = 8;
            oscard = verify[report];
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = verify[report];
            report = option.bind(tangon)(report);
            report = report.t;
            report = report.t0mEt7;
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['MuteSettingsHint'] = michal;
    return entity;
})();