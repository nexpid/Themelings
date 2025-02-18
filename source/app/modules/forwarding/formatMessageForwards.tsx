// app/modules/forwarding/formatMessageForwards.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: createGuildBreadcrumb
        golfie = argFoo;
        oscard = argBar;
        entity = {};
        michal = golfie.name;
        entity['originLabel'] = michal;
        tangon = _closure1_slot1;
        verify = _closure1_slot2;
        zuuluu = 8;
        zuuluu = verify[zuuluu];
        option = undefined;
        report = tangon.bind(option)(zuuluu);
        tangon = report.getGuildIconURL;
        zuuluu = {};
        offset = golfie.id;
        zuuluu['id'] = offset;
        offset = 16;
        zuuluu['size'] = offset;
        offset = golfie.icon;
        zuuluu['icon'] = offset;
        offset = false;
        zuuluu['canAnimate'] = offset;
        zuuluu = tangon.bind(report)(zuuluu);
        entity['originIconUrl'] = zuuluu;
        entity['timestampLabel'] = oscard;
        zuuluu = _closure1_slot0;
        michal = 9;
        tangon = verify[michal];
        tangon = zuuluu.bind(option)(tangon);
        report = tangon.intl;
        tangon = report.formatToPlainString;
        michal = verify[michal];
        michal = zuuluu.bind(option)(michal);
        michal = michal.t;
        zuuluu = michal.+l04BA;
        michal = {};
        golfie = golfie.name;
        michal['origin'] = golfie;
        michal['timestamp'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        entity['accessibilityLabel'] = michal;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: MessageForward
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['parentMessage'] = michal;
            michal = argBar;
            zuuluu['messageSnapshot'] = michal;
            michal = argBaz;
            zuuluu['snapshotIndex'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'getForwardInfo';
        entity['key'] = report;
        michal = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                romeon = arguments[0];
                kiloes = arguments[1];
                backup = arguments[2];
                yankee = arguments[3];
                verify = arguments[4];
                output = arguments[5];
                entity = this;
                golfie = undefined;
                if(!(romeon === golfie)) { _fun00002_ip = 34; continue _fun00001 }
 27:
                romeon = _closure1_slot6;
 34:
                if(!(kiloes === golfie)) { _fun00002_ip = 45; continue _fun00001 }
 38:
                kiloes = _closure1_slot10;
 45:
                if(!(backup === golfie)) { _fun00002_ip = 56; continue _fun00001 }
 49:
                backup = _closure1_slot9;
 56:
                if(!(yankee === golfie)) { _fun00002_ip = 67; continue _fun00001 }
 60:
                yankee = _closure1_slot8;
 67:
                if(!(verify === golfie)) { _fun00002_ip = 78; continue _fun00001 }
 71:
                verify = _closure1_slot7;
 78:
                if(!(output === golfie)) { _fun00002_ip = 89; continue _fun00001 }
 82:
                output = _closure1_slot5;
 89:
                tangon = entity.snapshotIndex;
                option = entity.parentMessage;
                report = entity.messageSnapshot;
                offset = _closure1_slot0;
                foxtra = _closure1_slot2;
                zuuluu = 10;
                zuuluu = foxtra[zuuluu];
                result = offset.bind(golfie)(zuuluu);
                sizing = result.getMessageForwardingExperimentConfig;
                oscard = {};
                zuuluu = 'GetForwardInfo';
                oscard['location'] = zuuluu;
                zuuluu = {};
                echoed = false;
                zuuluu['autoTrackExposure'] = echoed;
                zuuluu = sizing.bind(result)(oscard, zuuluu);
                zuuluu = zuuluu.useOldIcon;
                oscard = 11;
                oscard = foxtra[oscard];
                oscard = offset.bind(golfie)(oscard);
                foxtra = oscard.MessageForwardBreadcrumbExperiment;
                offset = foxtra.getCurrentConfig;
                oscard = {};
                sizing = 'MessageForward';
                oscard['location'] = sizing;
                oscard = offset.bind(foxtra)(oscard);
                oscard = oscard.showForwardBreadcrumb;
                if(oscard) { _fun00002_ip = 233; continue _fun00001 }
 219:
                oscard = {};
                oscard['snapshotIndex'] = tangon;
                oscard['useOldIcon'] = zuuluu;
                return oscard;
 233:
                offset = _closure1_slot0;
                foxtra = _closure1_slot2;
                oscard = 12;
                oscard = foxtra[oscard];
                offset = offset.bind(golfie)(oscard);
                oscard = offset.calendarFormatCompact;
                report = report.message;
                report = report.timestamp;
                oscard = oscard.bind(offset)(report);
                report = romeon.getChannel;
                entity = entity.parentMessage;
                entity = entity.channel_id;
                report = report.bind(romeon)(entity);
                entity = null;
                if(!(entity != report)) { _fun00002_ip = 331; continue _fun00001 }
 302:
                foxtra = report.guild_id;
                sizing = option.messageReference;
                result = entity == sizing;
                offset = undefined;
                if(result) { _fun00002_ip = 327; continue _fun00001 }
 322:
                offset = sizing.guild_id;
 327:
                if(!(foxtra !== offset)) { _fun00002_ip = 443; continue _fun00001 }
 331:
                offset = option.messageReference;
                sizing = entity == offset;
                foxtra = undefined;
                if(sizing) { _fun00002_ip = 351; continue _fun00001 }
 346:
                foxtra = offset.guild_id;
 351:
                if(!(entity != foxtra)) { _fun00002_ip = 429; continue _fun00001 }
 355:
                offset = verify.getGuild;
                sizing = offset.bind(verify)(foxtra);
                if(!(entity == sizing)) { _fun00002_ip = 379; continue _fun00001 }
 369:
                offset = output.getGuild;
                sizing = offset.bind(output)(foxtra);
 379:
                if(!(entity != sizing)) { _fun00002_ip = 412; continue _fun00001 }
 383:
                offset = {};
                offset['snapshotIndex'] = tangon;
                foxtra = _closure1_slot12;
                foxtra = foxtra.bind(golfie)(sizing, oscard);
                offset['footerInfo'] = foxtra;
                offset['useOldIcon'] = zuuluu;
                _fun00002_ip = 427; continue _fun00001;
 412:
                foxtra = {};
                foxtra['snapshotIndex'] = tangon;
                foxtra['useOldIcon'] = zuuluu;
                offset = foxtra;
 427:
                return offset;
 429:
                offset = {};
                offset['snapshotIndex'] = tangon;
                offset['useOldIcon'] = zuuluu;
                return offset;
 443:
                offset = romeon.getChannel;
                foxtra = option.messageReference;
                sizing = entity == foxtra;
                option = undefined;
                if(sizing) { _fun00002_ip = 468; continue _fun00001 }
 463:
                option = foxtra.channel_id;
 468:
                foxtra = offset.bind(romeon)(option);
                if(!(entity != foxtra)) { _fun00002_ip = 654; continue _fun00001 }
 480:
                offset = yankee.can;
                option = foxtra.accessPermissions;
                option = offset.bind(yankee)(option, foxtra);
                if(option) { _fun00002_ip = 515; continue _fun00001 }
 501:
                option = {};
                option['snapshotIndex'] = tangon;
                option['useOldIcon'] = zuuluu;
                return option;
 515:
                romeon = _closure1_slot0;
                sizing = _closure1_slot2;
                option = 13;
                option = sizing[option];
                yankee = romeon.bind(golfie)(option);
                offset = yankee.computeChannelName;
                update = true;
                sequen = yankee;
                vacuum = foxtra;
                ctrled = kiloes;
                source = backup;
                kiloes = sequen[offset](vacuum, ctrled, source, update, echoed);
                option = {};
                option['snapshotIndex'] = tangon;
                offset = {};
                offset['originLabel'] = kiloes;
                offset['timestampLabel'] = oscard;
                yankee = 9;
                foxtra = sizing[yankee];
                foxtra = romeon.bind(golfie)(foxtra);
                backup = foxtra.intl;
                foxtra = backup.formatToPlainString;
                yankee = sizing[yankee];
                yankee = romeon.bind(golfie)(yankee);
                yankee = yankee.t;
                romeon = yankee.+l04BA;
                yankee = {};
                yankee['origin'] = kiloes;
                yankee['timestamp'] = oscard;
                yankee = foxtra.bind(backup)(romeon, yankee);
                offset['accessibilityLabel'] = yankee;
                option['footerInfo'] = offset;
                option['useOldIcon'] = zuuluu;
                return option;
 654:
                option = verify.getGuild;
                report = report.guild_id;
                report = option.bind(verify)(report);
                if(!(entity != report)) { _fun00002_ip = 702; continue _fun00001 }
 673:
                entity = {};
                entity['snapshotIndex'] = tangon;
                michal = _closure1_slot12;
                michal = michal.bind(golfie)(report, oscard);
                entity['footerInfo'] = michal;
                entity['useOldIcon'] = zuuluu;
                _fun00002_ip = 717; continue _fun00001;
 702:
                michal = {};
                michal['snapshotIndex'] = tangon;
                michal['useOldIcon'] = zuuluu;
                entity = michal;
 717:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot11 = tangon;
    report = 15;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forwarding/formatMessageForwards.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MessageForward'] = tangon;
    michal = function(argFoo) { // Original name: maybeCreateSingleForwardForMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 14;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            zuuluu = zuuluu.bind(michal)(report);
            if(!zuuluu) { _fun00004_ip = 54; continue _fun00003 }
 36:
            zuuluu = report.messageSnapshots;
            tangon = 0;
            zuuluu = zuuluu[tangon];
            oscard = null;
            if(!(oscard == zuuluu)) { _fun00004_ip = 56; continue _fun00003 }
 54:
            return michal;
 56:
            entity = _closure1_slot11;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            offset = michal;
            verify = report;
            option = zuuluu;
            golfie = 0;
            entity = new offset[entity](verify, option, golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['maybeCreateSingleForwardForMessage'] = michal;
    return entity;
})();