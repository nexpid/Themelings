// app/modules/guild_scheduled_events/GuildScheduledEventUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.UpcomingGuildEventNoticeTypes;
    var _closure1_slot2 = golfie;
    golfie = tangon.NEW_EVENT_WINDOW_MILLISECONDS;
    var _closure1_slot3 = golfie;
    golfie = tangon.EVENT_STARTING_SOON_WINDOW_MILLISECONDS;
    var _closure1_slot4 = golfie;
    tangon = tangon.ACKED_RECENTLY_WINDOW_DAYS;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/GuildScheduledEventUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: getNextShownUpcomingEventNoticeType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            golfie = argBar;
            oscard = argBaz;
            zuuluu = argCor;
            report = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 1;
            entity = entity[offset];
            tangon = undefined;
            entity = report.bind(tangon)(entity);
            romeon = entity.bind(tangon)();
            entity = global;
            yankee = entity.Date;
            output = verify.scheduled_start_time;
            option = yankee.prototype;
            option = Object.create(option, {constructor: {value: yankee}});
            result = option;
            report = new result[yankee](output, sizing);
            option = report instanceof Object ? report : option;
            report = option.getTime;
            option = report.bind(option)();
            report = {};
            yankee = _closure1_slot4;
            yankee = option - yankee;
            report['start'] = yankee;
            report['end'] = option;
            backup = romeon.isBetween;
            foxtra = report.start;
            yankee = report.end;
            yankee = backup.bind(romeon)(foxtra, yankee);
            if(yankee) { _fun00002_ip = 237; continue _fun00001 }
 128:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            yankee = 2;
            yankee = backup[yankee];
            foxtra = foxtra.bind(tangon)(yankee);
            yankee = foxtra.extractTimestamp;
            verify = verify.id;
            yankee = yankee.bind(foxtra)(verify);
            foxtra = entity.Math;
            verify = foxtra.min;
            entity = null;
            backup = yankee;
            if(!(entity != oscard)) { _fun00002_ip = 187; continue _fun00001 }
 184:
            backup = oscard;
 187:
            oscard = _closure1_slot3;
            oscard = backup + oscard;
            verify = verify.bind(foxtra)(oscard, option);
            oscard = romeon.isBetween;
            oscard = oscard.bind(romeon)(yankee, verify);
            if(!oscard) { _fun00002_ip = 235; continue _fun00001 }
 216:
            if(!(entity == golfie)) { _fun00002_ip = 235; continue _fun00001 }
 220:
            if(zuuluu) { _fun00002_ip = 235; continue _fun00001 }
 223:
            entity = _closure1_slot2;
            entity = entity.NEW_EVENT;
            return entity;
 235:
            return tangon;
 237:
            entity = null;
            if(!(entity == golfie)) { _fun00002_ip = 255; continue _fun00001 }
 243:
            entity = _closure1_slot2;
            entity = entity.EVENT_STARTING_SOON;
            return entity;
 255:
            verify = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = entity[offset];
            oscard = verify.bind(tangon)(oscard);
            golfie = oscard.bind(tangon)(golfie);
            yankee = golfie.isBetween;
            oscard = report.start;
            report = report.end;
            oscard = yankee.bind(golfie)(oscard, report);
            report = golfie.isBetween;
            entity = entity[offset];
            entity = verify.bind(tangon)(entity);
            yankee = entity.bind(tangon)(option);
            offset = yankee.subtract;
            verify = _closure1_slot5;
            entity = 'days';
            entity = offset.bind(yankee)(verify, entity);
            report = report.bind(golfie)(entity, option);
            entity = undefined;
            if(oscard) { _fun00002_ip = 368; continue _fun00001 }
 350:
            if(!report) { _fun00002_ip = 358; continue _fun00001 }
 353:
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 368; continue _fun00001 }
 358:
            michal = _closure1_slot2;
            entity = michal.EVENT_STARTING_SOON;
 368:
            return entity;
        }
    };
    zuuluu['getNextShownUpcomingEventNoticeType'] = michal;
    return entity;
})();