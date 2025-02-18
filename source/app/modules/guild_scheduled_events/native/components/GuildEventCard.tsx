// app/modules/guild_scheduled_events/native/components/GuildEventCard.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: HubGuildEventCardControls
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.event;
            var _closure2_slot0 = offset;
            sizing = michal.isConnected;
            output = michal.onCloseAction;
            michal = _closure1_slot9;
            tangon = undefined;
            foxtra = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            yankee = 8;
            michal = oscard[yankee];
            report = zuuluu.bind(tangon)(michal);
            michal = report.useHubPrimaryActionButtonType;
            verify = michal.bind(report)(offset, sizing);
            michal = oscard[yankee];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.HubPrimaryActionType;
            report = michal.RSVP;
            michal = 9;
            michal = oscard[michal];
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.useStateFromStores;
            option = _closure1_slot4;
            michal = new Array(1);
            michal[0] = option;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            oscard = zuuluu.bind(oscard)(michal, entity);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot3;
            entity = {};
            option = foxtra.actionContainer;
            entity['style'] = option;
            option = null;
            if(!(verify === report)) { _fun00002_ip = 231; continue _fun00001 }
 161:
            romeon = _closure1_slot7;
            verify = _closure1_slot3;
            report = {};
            backup = foxtra.transitionButtonContainer;
            report['style'] = backup;
            result = _closure1_slot7;
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[yankee];
            backup = kiloes.bind(tangon)(backup);
            kiloes = backup.GuildEventCardTransitionTo;
            backup = {};
            backup['event'] = offset;
            backup = result.bind(tangon)(kiloes, backup);
            report['children'] = backup;
            option = romeon.bind(tangon)(verify, report);
 231:
            report = new Array(3);
            report[0] = option;
            romeon = _closure1_slot7;
            verify = _closure1_slot3;
            option = {};
            foxtra = foxtra.primaryButtonContainer;
            option['style'] = foxtra;
            kiloes = _closure1_slot7;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[yankee];
            foxtra = backup.bind(tangon)(foxtra);
            backup = foxtra.HubGuildEventCardPrimaryAction;
            foxtra = {};
            foxtra['event'] = offset;
            foxtra['onCloseAction'] = output;
            foxtra['isConnected'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            option['children'] = foxtra;
            option = romeon.bind(tangon)(verify, option);
            report[1] = option;
            if(!oscard) { _fun00002_ip = 366; continue _fun00001 }
 326:
            verify = _closure1_slot7;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            golfie = option.bind(tangon)(golfie);
            option = golfie.GuildEventShareAction;
            golfie = {};
            golfie['event'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 366:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: GuildEventCardControls
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.event;
            result = entity.isConnected;
            echoed = entity.onCloseAction;
            entity = _closure1_slot9;
            tangon = undefined;
            foxtra = entity.bind(tangon)();
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            offset = 8;
            entity = golfie[offset];
            michal = yankee.bind(tangon)(entity);
            entity = michal.usePrimaryActionButtonType;
            option = entity.bind(michal)(verify, result);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot3;
            entity = {};
            report = foxtra.actionContainer;
            entity['style'] = report;
            backup = _closure1_slot7;
            romeon = _closure1_slot3;
            report = {};
            kiloes = foxtra.primaryButtonContainer;
            report['style'] = kiloes;
            output = _closure1_slot7;
            kiloes = golfie[offset];
            kiloes = yankee.bind(tangon)(kiloes);
            sizing = kiloes.GuildEventCardPrimaryAction;
            kiloes = {};
            kiloes['event'] = verify;
            kiloes['onCloseAction'] = echoed;
            kiloes['isConnected'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            report['children'] = kiloes;
            romeon = backup.bind(tangon)(romeon, report);
            report = new Array(3);
            report[0] = romeon;
            golfie = golfie[offset];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.PrimaryActionType;
            golfie = golfie.START;
            golfie = option === golfie;
            if(!golfie) { _fun00004_ip = 264; continue _fun00003 }
 194:
            romeon = _closure1_slot7;
            yankee = _closure1_slot3;
            option = {};
            foxtra = foxtra.rsvpButtonContainer;
            option['style'] = foxtra;
            kiloes = _closure1_slot7;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[offset];
            foxtra = backup.bind(tangon)(foxtra);
            backup = foxtra.GuildEventCardRSVPAction;
            foxtra = {};
            foxtra['event'] = verify;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            option['children'] = foxtra;
            golfie = romeon.bind(tangon)(yankee, option);
 264:
            report[1] = golfie;
            option = _closure1_slot7;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.GuildEventShareAction;
            oscard = {};
            oscard['event'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    option = michal.bind(entity)(report);
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.View;
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = romeon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = romeon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.isGuildScheduledEventActive;
    var _closure1_slot6 = michal;
    michal = 5;
    report = golfie[michal];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsxs;
    var _closure1_slot8 = michal;
    michal = 6;
    michal = golfie[michal];
    verify = oscard.bind(entity)(michal);
    report = verify.createStyles;
    michal = {};
    offset = {'flexDirection': 'column', 'alignContent': 'center', 'justifyContent': 'center', 'borderRadius': null, 'borderWidth': 1};
    yankee = 7;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderRadius'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.LIVE_STAGE_TILE_BORDER;
    offset['borderColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = foxtra;
    michal['cardContainer'] = offset;
    offset = {};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.STATUS_POSITIVE_BACKGROUND;
    offset['borderColor'] = yankee;
    michal['connected'] = offset;
    offset = {'flexDirection': 'column', 'padding': 16};
    michal['innerContainer'] = offset;
    offset = {'paddingTop': 16, 'flexDirection': 'row'};
    michal['actionContainer'] = offset;
    offset = {'flex': 1, 'marginLeft': 8};
    michal['rsvpButtonContainer'] = offset;
    offset = {'flex': 1, 'flexDirection': 'row', 'justifyContent': 'space-between'};
    michal['primaryButtonContainer'] = offset;
    offset = {'flex': 1, 'marginRight': 8};
    michal['transitionButtonContainer'] = offset;
    michal = report.bind(verify)(michal);
    var _closure1_slot9 = michal;
    report = option.memo;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            backup = entity.event;
            var _closure2_slot0 = backup;
            michal = entity.onPress;
            var _closure2_slot1 = michal;
            oscard = entity.onCloseAction;
            sizing = entity.hideControls;
            tangon = undefined;
            if(!(sizing === tangon)) { _fun00006_ip = 44; continue _fun00005 }
 42:
            sizing = false;
 44:
            output = entity.isHubContext;
            source = entity.isNew;
            if(!(source === tangon)) { _fun00006_ip = 62; continue _fun00005 }
 60:
            source = false;
 62:
            var _closure2_slot2 = tangon;
            entity = backup.channel_id;
            _closure2_slot2 = entity;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            golfie = zuuluu.bind(tangon)(michal);
            report = golfie.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    entity = zuuluu.isConnected;
                    entity = entity.bind(zuuluu)();
                    if(!entity) { _fun00008_ip = 45; continue _fun00007 }
 20:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getChannelId;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot2;
                    entity = zuuluu === michal;
 45:
                    return entity;
                }
            };
            report = report.bind(golfie)(zuuluu, entity, michal);
            if(!report) { _fun00006_ip = 149; continue _fun00005 }
 140:
            entity = _closure1_slot6;
            report = entity.bind(tangon)(backup);
 149:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.recurrenceRuleFromServer;
            entity = backup.recurrence_rule;
            kiloes = michal.bind(zuuluu)(entity);
            ctrled = function() { // Original name: handlePress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 28; continue _fun00009 }
 13:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = _closure1_slot7;
            if(output) { _fun00006_ip = 206; continue _fun00005 }
 200:
            michal = _closure1_slot11;
            _fun00006_ip = 210; continue _fun00005;
 206:
            michal = _closure1_slot10;
 210:
            entity = {};
            entity['event'] = backup;
            entity['onCloseAction'] = oscard;
            entity['isConnected'] = report;
            romeon = zuuluu.bind(tangon)(michal, entity);
            zuuluu = _closure1_slot7;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            entity = yankee.bind(tangon)(entity);
            michal = entity.Card;
            entity = {};
            report = false;
            entity['accessible'] = report;
            entity['onPress'] = ctrled;
            golfie = _closure1_slot8;
            oscard = _closure1_slot3;
            report = {};
            echoed = _closure1_slot7;
            update = 8;
            option = verify[update];
            option = yankee.bind(tangon)(option);
            result = option.GuildEventCardHeader;
            option = {};
            option['event'] = backup;
            vacuum = !output;
            option['showCreator'] = vacuum;
            option['isNew'] = source;
            result = echoed.bind(tangon)(result, option);
            option = new Array(6);
            option[0] = result;
            source = _closure1_slot7;
            result = verify[update];
            result = yankee.bind(tangon)(result);
            echoed = result.GuildEventCardMetaInfo;
            result = {};
            result['event'] = backup;
            result['onTitlePress'] = ctrled;
            result = source.bind(tangon)(echoed, result);
            option[1] = result;
            result = _closure1_slot7;
            verify = verify[update];
            verify = yankee.bind(tangon)(verify);
            yankee = verify.GuildEventSimpleLocation;
            verify = {};
            verify['event'] = backup;
            verify = result.bind(tangon)(yankee, verify);
            option[2] = verify;
            verify = null;
            yankee = null;
            if(!output) { _fun00006_ip = 466; continue _fun00005 }
 426:
            echoed = _closure1_slot7;
            result = _closure1_slot0;
            output = _closure1_slot2;
            output = output[update];
            output = result.bind(tangon)(output);
            result = output.HubEventGuildInfo;
            output = {};
            output['event'] = backup;
            yankee = echoed.bind(tangon)(result, output);
 466:
            option[3] = yankee;
            yankee = null;
            if(sizing) { _fun00006_ip = 478; continue _fun00005 }
 475:
            yankee = romeon;
 478:
            option[4] = yankee;
            verify = verify != kiloes;
            if(!verify) { _fun00006_ip = 557; continue _fun00005 }
 489:
            romeon = _closure1_slot7;
            yankee = _closure1_slot1;
            sizing = _closure1_slot2;
            offset = 12;
            offset = sizing[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            sizing = backup.guild_id;
            offset['guildId'] = sizing;
            offset['recurrenceRule'] = kiloes;
            backup = backup.id;
            offset['guildEventId'] = backup;
            foxtra = function(argFoo) { // Original name: onRecurrencePress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    report = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00012_ip = 37; continue _fun00011 }
 20:
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    michal = argFoo;
                    entity = tangon.bind(report)(zuuluu, michal);
 37:
                    return entity;
                }
            };
            offset['onRecurrencePress'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 557:
            option[5] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_scheduled_events/native/components/GuildEventCard.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['useGuildEventCardStyles'] = michal;
    return entity;
})();