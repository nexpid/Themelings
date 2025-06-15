// app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SafetyWarningTypes;
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    option = option.HOUR;
    option = tangon * option;
    var _closure1_slot3 = option;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    golfie = tangon.HOUR;
    tangon = 12;
    tangon = tangon * golfie;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSafetyToolsButtonTooltipForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            michal = option[entity];
            entity = undefined;
            report = tangon.bind(entity)(michal);
            michal = report.useInappropriateConversationSafetyToolsWarningForChannel;
            report = michal.bind(report)(golfie);
            michal = 3;
            michal = option[michal];
            oscard = tangon.bind(entity)(michal);
            michal = oscard.useInappropriateConversationWarningsForChannel;
            oscard = michal.bind(oscard)(golfie);
            michal = 4;
            michal = option[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.useShouldShowInitialSafetyToolsButtonTooltip;
            michal = michal.bind(tangon)(golfie);
            tangon = null;
            if(!(tangon != report)) { _fun00002_ip = 397; continue _fun00001 }
 96:
            if(michal) { _fun00002_ip = 397; continue _fun00001 }
 102:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 5;
            michal = golfie[michal];
            report = report.bind(entity)(michal);
            michal = report.shouldShowTakeoverForWarnings;
            michal = michal.bind(report)(oscard);
            if(michal) { _fun00002_ip = 397; continue _fun00001 }
 139:
            report = oscard.some;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot2;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = michal === entity;
                return entity;
            };
            michal = report.bind(oscard)(michal);
            golfie = oscard.filter;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.dismiss_timestamp;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            option = golfie.bind(oscard)(report);
            golfie = option.sort;
            report = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argBar;
                    michal = entity.dismiss_timestamp;
                    entity = argFoo;
                    entity = entity.dismiss_timestamp;
                    michal = michal < entity;
                    entity = 1;
                    if(!michal) { _fun00004_ip = 34; continue _fun00003 }
 28:
                    entity = -1;
 34:
                    return entity;
                }
            };
            golfie = golfie.bind(option)(report);
            option = golfie.length;
            report = 1;
            if(!(!(option < report))) { _fun00002_ip = 397; continue _fun00001 }
 207:
            report = 0;
            report = golfie[report];
            yankee = report.dismiss_timestamp;
            golfie = michal;
            if(!(golfie === entity)) { _fun00002_ip = 228; continue _fun00001 }
 226:
            golfie = false;
 228:
            report = tangon == yankee;
            michal = true;
            if(report) { _fun00002_ip = 335; continue _fun00001 }
 237:
            report = global;
            option = report.Date;
            offset = option.prototype;
            offset = Object.create(offset, {constructor: {value: option}});
            foxtra = offset;
            romeon = yankee;
            option = new foxtra[option](romeon, yankee);
            offset = option instanceof Object ? option : offset;
            option = offset.getTime;
            option = option.bind(offset)();
            if(golfie) { _fun00002_ip = 287; continue _fun00001 }
 281:
            golfie = _closure1_slot4;
            _fun00002_ip = 291; continue _fun00001;
 287:
            golfie = _closure1_slot3;
 291:
            golfie = option + golfie;
            report = report.Date;
            option = report.prototype;
            option = Object.create(option, {constructor: {value: report}});
            foxtra = option;
            report = new foxtra[report](romeon);
            option = report instanceof Object ? report : option;
            report = option.getTime;
            report = report.bind(option)();
            michal = report >= golfie;
 335:
            if(!michal) { _fun00002_ip = 397; continue _fun00001 }
 338:
            report = oscard.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.dismiss_timestamp;
                entity = null;
                entity = entity == michal;
                return entity;
            };
            report = report.bind(oscard)(michal);
            oscard = report.findLast;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot2;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = michal === entity;
                return entity;
            };
            michal = oscard.bind(report)(michal);
            if(!(tangon == michal)) { _fun00002_ip = 395; continue _fun00001 }
 377:
            tangon = report.findLast;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot2;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_2;
                entity = michal === entity;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu);
 395:
            return michal;
 397:
            return entity;
        }
    };
    zuuluu['useSafetyToolsButtonTooltipForChannel'] = michal;
    return entity;
})();