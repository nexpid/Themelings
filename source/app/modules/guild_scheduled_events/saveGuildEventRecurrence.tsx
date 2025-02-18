// app/modules/guild_scheduled_events/saveGuildEventRecurrence.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/saveGuildEventRecurrence.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: saveGuildEventRecurrence
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            yankee = argBaz;
            michal = argCor;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            foxtra = 0;
            golfie = tangon[foxtra];
            entity = undefined;
            verify = report.bind(entity)(golfie);
            golfie = verify.getBaseScheduleForRecurrence;
            offset = golfie.bind(verify)(option, zuuluu);
            tangon = tangon[foxtra];
            verify = report.bind(entity)(tangon);
            golfie = verify.areDatesIdentical;
            report = offset.startDate;
            tangon = yankee.startDate;
            report = golfie.bind(verify)(report, tangon);
            tangon = null;
            romeon = null;
            if(report) { _fun00002_ip = 94; continue _fun00001 }
 88:
            romeon = yankee.startDate;
 94:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[foxtra];
            backup = golfie.bind(entity)(report);
            verify = backup.areDatesIdentical;
            golfie = offset.endDate;
            report = yankee.endDate;
            report = verify.bind(backup)(golfie, report);
            verify = null;
            if(report) { _fun00002_ip = 146; continue _fun00001 }
 140:
            verify = yankee.endDate;
 146:
            if(!(tangon == michal)) { _fun00002_ip = 324; continue _fun00001 }
 153:
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            report = 2;
            report = backup[report];
            kiloes = golfie.bind(entity)(report);
            report = kiloes.extractTimestamp;
            output = report.bind(kiloes)(option);
            report = 1;
            report = backup[report];
            sizing = golfie.bind(entity)(report);
            kiloes = sizing.createGuildEventException;
            backup = {};
            report = global;
            report = report.Date;
            golfie = report.prototype;
            golfie = Object.create(golfie, {constructor: {value: report}});
            ctrled = golfie;
            source = output;
            report = new ctrled[report](source, update);
            golfie = report instanceof Object ? report : golfie;
            report = golfie.toISOString;
            report = report.bind(golfie)();
            backup['original_scheduled_start_time'] = report;
            golfie = tangon == romeon;
            report = undefined;
            if(golfie) { _fun00002_ip = 269; continue _fun00001 }
 259:
            golfie = romeon.toISOString;
            report = golfie.bind(romeon)();
 269:
            backup['scheduled_start_time'] = report;
            golfie = tangon == verify;
            report = undefined;
            if(golfie) { _fun00002_ip = 293; continue _fun00001 }
 283:
            golfie = verify.toISOString;
            report = golfie.bind(verify)();
 293:
            backup['scheduled_end_time'] = report;
            report = false;
            backup['is_canceled'] = report;
            golfie = zuuluu.guild_id;
            report = zuuluu.id;
            report = kiloes.bind(sizing)(backup, golfie, report);
            return report;
 324:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[foxtra];
            golfie = golfie.bind(entity)(report);
            report = golfie.areSchedulesIdentical;
            report = report.bind(golfie)(yankee, offset);
            golfie = _closure1_slot1;
            offset = _closure1_slot2;
            oscard = 1;
            oscard = offset[oscard];
            oscard = golfie.bind(entity)(oscard);
            if(report) { _fun00002_ip = 468; continue _fun00001 }
 376:
            golfie = oscard.updateGuildEventException;
            report = {};
            yankee = tangon == romeon;
            offset = undefined;
            if(yankee) { _fun00002_ip = 403; continue _fun00001 }
 393:
            yankee = romeon.toISOString;
            offset = yankee.bind(romeon)();
 403:
            report['scheduled_start_time'] = offset;
            tangon = tangon == verify;
            entity = undefined;
            if(tangon) { _fun00002_ip = 427; continue _fun00001 }
 417:
            tangon = verify.toISOString;
            entity = tangon.bind(verify)();
 427:
            report['scheduled_end_time'] = entity;
            entity = michal.is_canceled;
            report['is_canceled'] = entity;
            update = zuuluu.guild_id;
            echoed = zuuluu.id;
            ctrled = oscard;
            source = report;
            result = option;
            entity = ctrled[golfie](source, update, echoed, result, output);
            _fun00002_ip = 497; continue _fun00001;
 468:
            report = oscard.deleteGuildEventException;
            tangon = zuuluu.guild_id;
            zuuluu = zuuluu.id;
            michal = michal.event_exception_id;
            entity = report.bind(oscard)(tangon, zuuluu, michal);
 497:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();