// app/modules/chat/native/SlowModeIndicator.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot6 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'alignItems': 'center', 'flexDirection': 'row'};
    tangon['container'] = offset;
    offset = {};
    yankee = 5;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_4;
    offset['marginLeft'] = yankee;
    tangon['icon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot8 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: SlowModeIndicator
        michal = argFoo;
        zuuluu = michal.channelId;
        var _closure2_slot0 = zuuluu;
        yankee = michal.hasTypingText;
        var _closure2_slot1 = yankee;
        michal = michal.slowmodeType;
        var _closure2_slot2 = michal;
        michal = _closure1_slot8;
        tangon = undefined;
        verify = michal.bind(tangon)();
        golfie = _closure1_slot0;
        offset = _closure1_slot2;
        michal = 6;
        michal = offset[michal];
        option = golfie.bind(tangon)(michal);
        oscard = option.useStateFromStores;
        michal = _closure1_slot5;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            tangon = _closure1_slot5;
            zuuluu = tangon.getSlowmodeCooldownGuess;
            michal = _closure2_slot0;
            entity = _closure2_slot2;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        option = oscard.bind(option)(zuuluu, michal);
        var _closure2_slot3 = option;
        oscard = _closure1_slot3;
        zuuluu = oscard.useMemo;
        michal = new Array(2);
        michal[0] = yankee;
        michal[1] = option;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                offset = _closure1_slot1;
                option = _closure1_slot2;
                entity = 7;
                entity = option[entity];
                yankee = undefined;
                tangon = offset.bind(yankee)(entity);
                michal = tangon.duration;
                verify = _closure2_slot3;
                tangon = michal.bind(tangon)(verify);
                michal = tangon.minutes;
                oscard = michal.bind(tangon)();
                michal = global;
                report = michal.HermesInternal;
                report = report.concat;
                golfie = '';
                oscard = report.bind(golfie)(oscard);
                report = oscard.padStart;
                backup = 2;
                foxtra = '0';
                oscard = report.bind(oscard)(backup, foxtra);
                report = tangon.seconds;
                romeon = report.bind(tangon)();
                report = michal.HermesInternal;
                report = report.concat;
                romeon = report.bind(golfie)(romeon);
                report = romeon.padStart;
                report = report.bind(romeon)(backup, foxtra);
                romeon = 8;
                option = option[romeon];
                option = offset.bind(yankee)(option);
                option = option.Millis;
                option = option.HOUR;
                if(!(!(verify >= option))) { _fun00002_ip = 337; continue _fun00001 }
 164:
                verify = _closure2_slot3;
                offset = _closure1_slot1;
                option = _closure1_slot2;
                option = option[romeon];
                option = offset.bind(yankee)(option);
                option = option.Millis;
                option = option.MINUTE;
                if(!(!(verify >= option))) { _fun00002_ip = 303; continue _fun00001 }
 201:
                verify = _closure2_slot3;
                option = 0;
                if(!(!(verify > option))) { _fun00002_ip = 279; continue _fun00001 }
 211:
                option = _closure2_slot1;
                entity = null;
                if(option) { _fun00002_ip = 277; continue _fun00001 }
 220:
                offset = _closure1_slot0;
                romeon = _closure1_slot2;
                zuuluu = 9;
                option = romeon[zuuluu];
                option = offset.bind(yankee)(option);
                verify = option.intl;
                option = verify.string;
                zuuluu = romeon[zuuluu];
                zuuluu = offset.bind(yankee)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.Icu3bW;
                entity = option.bind(verify)(zuuluu);
 277:
                _fun00002_ip = 301; continue _fun00001;
 279:
                zuuluu = michal.HermesInternal;
                option = zuuluu.concat;
                zuuluu = '0:';
                entity = option.bind(zuuluu)(report);
 301:
                _fun00002_ip = 335; continue _fun00001;
 303:
                zuuluu = tangon.minutes;
                verify = zuuluu.bind(tangon)();
                zuuluu = michal.HermesInternal;
                option = zuuluu.concat;
                zuuluu = ':';
                entity = option.bind(golfie)(verify, zuuluu, report);
 335:
                _fun00002_ip = 381; continue _fun00001;
 337:
                zuuluu = tangon.hours;
                echoed = zuuluu.bind(tangon)();
                michal = michal.HermesInternal;
                zuuluu = michal.concat;
                michal = ':';
                update = golfie;
                result = michal;
                output = oscard;
                sizing = michal;
                kiloes = report;
                entity = update[zuuluu](echoed, result, output, sizing, kiloes, backup);
 381:
                return entity;
            }
        };
        yankee = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot7;
        michal = _closure1_slot4;
        entity = {};
        oscard = verify.container;
        entity['style'] = oscard;
        option = _closure1_slot6;
        report = 10;
        report = offset[report];
        report = golfie.bind(tangon)(report);
        oscard = report.Text;
        report = {'lineClamp': 1, 'allowFontScaling': false, 'variant': 'text-xs/medium', 'color': 'interactive-normal'};
        report['children'] = yankee;
        oscard = option.bind(tangon)(oscard, report);
        report = new Array(2);
        report[0] = oscard;
        oscard = 11;
        oscard = offset[oscard];
        oscard = golfie.bind(tangon)(oscard);
        golfie = oscard.TimerIcon;
        oscard = {};
        verify = verify.icon;
        oscard['style'] = verify;
        verify = 'xxs';
        oscard['size'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat/native/SlowModeIndicator.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();