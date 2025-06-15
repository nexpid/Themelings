// app/utils/ModerationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: mapColorToHighlightColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 2;
            michal = michal[oscard];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(michal);
            report = golfie.unsafe_getRawColor;
            michal = 'PRIMARY_400';
            michal = report.bind(golfie)(michal);
            if(!(michal !== tangon)) { _fun00002_ip = 370; continue _fun00001 }
 50:
            report = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            golfie = report.bind(zuuluu)(michal);
            report = golfie.unsafe_getRawColor;
            michal = 'GREEN_360';
            michal = report.bind(golfie)(michal);
            if(!(michal !== tangon)) { _fun00002_ip = 336; continue _fun00001 }
 89:
            report = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            golfie = report.bind(zuuluu)(michal);
            report = golfie.unsafe_getRawColor;
            michal = 'YELLOW_360';
            michal = report.bind(golfie)(michal);
            if(!(michal !== tangon)) { _fun00002_ip = 302; continue _fun00001 }
 128:
            report = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            golfie = report.bind(zuuluu)(michal);
            report = golfie.unsafe_getRawColor;
            michal = 'ORANGE_345';
            michal = report.bind(golfie)(michal);
            if(!(michal !== tangon)) { _fun00002_ip = 268; continue _fun00001 }
 164:
            report = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            oscard = report.bind(zuuluu)(michal);
            report = oscard.unsafe_getRawColor;
            michal = 'RED_400';
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00002_ip = 234; continue _fun00001 }
 200:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.HighlightColors;
            michal = michal.NONE;
            return michal;
 234:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.HighlightColors;
            michal = michal.RED;
            return michal;
 268:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.HighlightColors;
            michal = michal.ORANGE;
            return michal;
 302:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.HighlightColors;
            michal = michal.YELLOW;
            return michal;
 336:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.HighlightColors;
            michal = michal.GREEN;
            return michal;
 370:
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.HighlightColors;
            entity = entity.ACCENT;
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    option = report.VerificationLevels;
    var _closure1_slot2 = option;
    option = report.VerificationCriteria;
    var _closure1_slot3 = option;
    report = report.GuildExplicitContentFilterTypes;
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ExplicitContentFilterTypes;
    var _closure1_slot5 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/ModerationUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['mapColorToHighlightColor'] = tangon;
    tangon = function(argFoo) { // Original name: mapOptionToHighlightedRowOptions
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.name;
            entity['title'] = zuuluu;
            zuuluu = michal.desc;
            entity['description'] = zuuluu;
            report = _closure1_slot6;
            tangon = michal.color;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            entity['highlightColor'] = zuuluu;
            zuuluu = michal.value;
            entity['value'] = zuuluu;
            michal = michal.disabled;
            entity['disabled'] = michal;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['mapOptionToHighlightedRowOptions'] = tangon;
    tangon = function() { // Original name: generateVerificationLevelOptions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[0];
            report = arguments[1];
            oscard = undefined;
            if(!(zuuluu === oscard)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            zuuluu = false;
 14:
            if(!(report === oscard)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            report = false;
 20:
            michal = {};
            verify = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 4;
            golfie = entity[offset];
            golfie = verify.bind(oscard)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = entity[offset];
            golfie = verify.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.PEzffn;
            golfie = option.bind(yankee)(golfie);
            michal['name'] = golfie;
            golfie = entity[offset];
            golfie = verify.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.string;
            entity = entity[offset];
            entity = verify.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.nDQy0t;
            entity = golfie.bind(option)(entity);
            michal['desc'] = entity;
            entity = _closure1_slot2;
            entity = entity.NONE;
            michal['value'] = entity;
            michal['disabled'] = zuuluu;
            entity = null;
            if(!zuuluu) { _fun00004_ip = 212; continue _fun00003 }
 160:
            verify = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.string;
            zuuluu = zuuluu[offset];
            zuuluu = verify.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.j9WtHx;
            entity = golfie.bind(option)(zuuluu);
 212:
            michal['tooltipText'] = entity;
            entity = new Array(5);
            entity[0] = michal;
            michal = {};
            verify = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.SsCK8P;
            golfie = option.bind(yankee)(golfie);
            michal['name'] = golfie;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.string;
            zuuluu = zuuluu[offset];
            zuuluu = verify.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.8GCOX1;
            zuuluu = golfie.bind(option)(zuuluu);
            michal['desc'] = zuuluu;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.LOW;
            michal['value'] = zuuluu;
            zuuluu = undefined;
            if(report) { _fun00004_ip = 390; continue _fun00003 }
 355:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            golfie = 2;
            golfie = verify[golfie];
            verify = option.bind(oscard)(golfie);
            option = verify.unsafe_getRawColor;
            golfie = 'GREEN_360';
            zuuluu = option.bind(verify)(golfie);
 390:
            michal['color'] = zuuluu;
            entity[1] = michal;
            michal = {};
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            option = zuuluu[offset];
            option = golfie.bind(oscard)(option);
            yankee = option.intl;
            verify = yankee.string;
            option = zuuluu[offset];
            option = golfie.bind(oscard)(option);
            option = option.t;
            option = option.WwNoR0;
            option = verify.bind(yankee)(option);
            michal['name'] = option;
            option = zuuluu[offset];
            option = golfie.bind(oscard)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            zuuluu = zuuluu[offset];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            golfie = zuuluu.VS14gY;
            zuuluu = {};
            yankee = _closure1_slot3;
            yankee = yankee.ACCOUNT_AGE;
            zuuluu['min'] = yankee;
            zuuluu = option.bind(verify)(golfie, zuuluu);
            michal['desc'] = zuuluu;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.MEDIUM;
            michal['value'] = zuuluu;
            zuuluu = undefined;
            if(report) { _fun00004_ip = 580; continue _fun00003 }
 545:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            golfie = 2;
            golfie = verify[golfie];
            verify = option.bind(oscard)(golfie);
            option = verify.unsafe_getRawColor;
            golfie = 'YELLOW_360';
            zuuluu = option.bind(verify)(golfie);
 580:
            michal['color'] = zuuluu;
            entity[2] = michal;
            michal = {};
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            option = zuuluu[offset];
            option = golfie.bind(oscard)(option);
            yankee = option.intl;
            verify = yankee.string;
            option = zuuluu[offset];
            option = golfie.bind(oscard)(option);
            option = option.t;
            option = option.I2jMUF;
            option = verify.bind(yankee)(option);
            michal['name'] = option;
            option = zuuluu[offset];
            option = golfie.bind(oscard)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            zuuluu = zuuluu[offset];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            golfie = zuuluu.r+b3Iy;
            zuuluu = {};
            yankee = _closure1_slot3;
            yankee = yankee.MEMBER_AGE;
            zuuluu['min'] = yankee;
            zuuluu = option.bind(verify)(golfie, zuuluu);
            michal['desc'] = zuuluu;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.HIGH;
            michal['value'] = zuuluu;
            zuuluu = undefined;
            if(report) { _fun00004_ip = 770; continue _fun00003 }
 735:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            golfie = 2;
            golfie = verify[golfie];
            verify = option.bind(oscard)(golfie);
            option = verify.unsafe_getRawColor;
            golfie = 'ORANGE_345';
            zuuluu = option.bind(verify)(golfie);
 770:
            michal['color'] = zuuluu;
            entity[3] = michal;
            michal = {};
            verify = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.cJY8w8;
            golfie = option.bind(yankee)(golfie);
            michal['name'] = golfie;
            golfie = zuuluu[offset];
            golfie = verify.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.string;
            zuuluu = zuuluu[offset];
            zuuluu = verify.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.PWaKmZ;
            zuuluu = golfie.bind(option)(zuuluu);
            michal['desc'] = zuuluu;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.VERY_HIGH;
            michal['value'] = zuuluu;
            zuuluu = undefined;
            if(report) { _fun00004_ip = 943; continue _fun00003 }
 908:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 2;
            tangon = golfie[tangon];
            oscard = report.bind(oscard)(tangon);
            report = oscard.unsafe_getRawColor;
            tangon = 'RED_400';
            zuuluu = report.bind(oscard)(tangon);
 943:
            michal['color'] = zuuluu;
            entity[4] = michal;
            return entity;
        }
    };
    zuuluu['generateVerificationLevelOptions'] = tangon;
    tangon = function() { // Original name: generateContentFilterHighlightedOptions
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = arguments[0];
            report = undefined;
            if(!(golfie === report)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            golfie = false;
 11:
            verify = _closure1_slot0;
            entity = _closure1_slot1;
            michal = 5;
            michal = entity[michal];
            oscard = verify.bind(report)(michal);
            tangon = oscard.isEligibleForSensitiveContentGoreExperiment;
            michal = 'generateContentFilterHighlightedOptions';
            option = tangon.bind(oscard)(michal);
            michal = {};
            yankee = 4;
            tangon = entity[yankee];
            tangon = verify.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            entity = entity[yankee];
            entity = verify.bind(report)(entity);
            entity = entity.t;
            entity = entity.iHuPEx;
            entity = tangon.bind(oscard)(entity);
            michal['name'] = entity;
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = entity[yankee];
            oscard = tangon.bind(report)(oscard);
            verify = oscard.intl;
            oscard = verify.string;
            entity = entity[yankee];
            entity = tangon.bind(report)(entity);
            tangon = entity.t;
            if(option) { _fun00006_ip = 161; continue _fun00005 }
 148:
            entity = tangon.dzbET0;
            entity = oscard.bind(verify)(entity);
            _fun00006_ip = 172; continue _fun00005;
 161:
            tangon = tangon.Z+yUWF;
            entity = oscard.bind(verify)(tangon);
 172:
            michal['desc'] = entity;
            entity = _closure1_slot4;
            entity = entity.ALL_MEMBERS;
            michal['value'] = entity;
            romeon = _closure1_slot0;
            tangon = _closure1_slot1;
            oscard = 2;
            entity = tangon[oscard];
            offset = romeon.bind(report)(entity);
            verify = offset.unsafe_getRawColor;
            entity = 'RED_400';
            entity = verify.bind(offset)(entity);
            michal['color'] = entity;
            entity = new Array(3);
            entity[0] = michal;
            michal = {};
            verify = tangon[yankee];
            verify = romeon.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            tangon = tangon[yankee];
            tangon = romeon.bind(report)(tangon);
            tangon = tangon.t;
            tangon = tangon.ynfFaG;
            tangon = verify.bind(offset)(tangon);
            michal['name'] = tangon;
            verify = _closure1_slot0;
            tangon = _closure1_slot1;
            offset = tangon[yankee];
            offset = verify.bind(report)(offset);
            romeon = offset.intl;
            offset = romeon.string;
            tangon = tangon[yankee];
            tangon = verify.bind(report)(tangon);
            verify = tangon.t;
            if(option) { _fun00006_ip = 345; continue _fun00005 }
 332:
            tangon = verify.qZ1eHh;
            tangon = offset.bind(romeon)(tangon);
            _fun00006_ip = 356; continue _fun00005;
 345:
            verify = verify.3fRINz;
            tangon = offset.bind(romeon)(verify);
 356:
            michal['desc'] = tangon;
            tangon = _closure1_slot4;
            tangon = tangon.MEMBERS_WITHOUT_ROLES;
            michal['value'] = tangon;
            michal['disabled'] = golfie;
            verify = null;
            if(!golfie) { _fun00006_ip = 436; continue _fun00005 }
 384:
            backup = _closure1_slot0;
            offset = _closure1_slot1;
            romeon = offset[yankee];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            offset = offset[yankee];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            offset = offset.j9WtHx;
            verify = romeon.bind(foxtra)(offset);
 436:
            michal['tooltipText'] = verify;
            foxtra = _closure1_slot0;
            verify = _closure1_slot1;
            offset = verify[oscard];
            backup = foxtra.bind(report)(offset);
            romeon = backup.unsafe_getRawColor;
            offset = 'YELLOW_360';
            offset = romeon.bind(backup)(offset);
            michal['color'] = offset;
            entity[1] = michal;
            michal = {};
            offset = verify[yankee];
            offset = foxtra.bind(report)(offset);
            romeon = offset.intl;
            offset = romeon.string;
            verify = verify[yankee];
            verify = foxtra.bind(report)(verify);
            verify = verify.t;
            verify = verify.VbSyAw;
            verify = offset.bind(romeon)(verify);
            michal['name'] = verify;
            foxtra = _closure1_slot0;
            verify = _closure1_slot1;
            offset = verify[yankee];
            offset = foxtra.bind(report)(offset);
            romeon = offset.intl;
            offset = romeon.string;
            verify = verify[yankee];
            verify = foxtra.bind(report)(verify);
            verify = verify.t;
            if(option) { _fun00006_ip = 588; continue _fun00005 }
 575:
            option = verify.jesz8f;
            option = offset.bind(romeon)(option);
            _fun00006_ip = 599; continue _fun00005;
 588:
            verify = verify.M6GNsL;
            option = offset.bind(romeon)(verify);
 599:
            michal['desc'] = option;
            option = _closure1_slot4;
            option = option.DISABLED;
            michal['value'] = option;
            michal['disabled'] = golfie;
            tangon = null;
            if(!golfie) { _fun00006_ip = 679; continue _fun00005 }
 627:
            offset = _closure1_slot0;
            golfie = _closure1_slot1;
            option = golfie[yankee];
            option = offset.bind(report)(option);
            verify = option.intl;
            option = verify.string;
            golfie = golfie[yankee];
            golfie = offset.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.j9WtHx;
            tangon = option.bind(verify)(golfie);
 679:
            michal['tooltipText'] = tangon;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            report = tangon.bind(report)(zuuluu);
            tangon = report.unsafe_getRawColor;
            zuuluu = 'PRIMARY_400';
            zuuluu = tangon.bind(report)(zuuluu);
            michal['color'] = zuuluu;
            entity[2] = michal;
            return entity;
        }
    };
    zuuluu['generateContentFilterHighlightedOptions'] = tangon;
    tangon = function() { // Original name: generateContentFilterOptions
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = arguments[0];
            option = undefined;
            if(!(report === option)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            report = false;
 11:
            offset = _closure1_slot0;
            entity = _closure1_slot1;
            michal = 5;
            michal = entity[michal];
            oscard = offset.bind(option)(michal);
            zuuluu = oscard.isEligibleForSensitiveContentGoreExperiment;
            michal = 'generateContentFilterOptions';
            oscard = zuuluu.bind(oscard)(michal);
            michal = {};
            verify = 4;
            zuuluu = entity[verify];
            zuuluu = offset.bind(option)(zuuluu);
            golfie = zuuluu.intl;
            zuuluu = golfie.string;
            entity = entity[verify];
            entity = offset.bind(option)(entity);
            entity = entity.t;
            entity = entity.iHuPEx;
            entity = zuuluu.bind(golfie)(entity);
            michal['name'] = entity;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = entity[verify];
            golfie = zuuluu.bind(option)(golfie);
            offset = golfie.intl;
            golfie = offset.string;
            entity = entity[verify];
            entity = zuuluu.bind(option)(entity);
            zuuluu = entity.t;
            if(oscard) { _fun00008_ip = 159; continue _fun00007 }
 146:
            entity = zuuluu.dzbET0;
            entity = golfie.bind(offset)(entity);
            _fun00008_ip = 170; continue _fun00007;
 159:
            zuuluu = zuuluu.Z+yUWF;
            entity = golfie.bind(offset)(zuuluu);
 170:
            michal['desc'] = entity;
            entity = _closure1_slot4;
            entity = entity.ALL_MEMBERS;
            michal['value'] = entity;
            entity = new Array(3);
            entity[0] = michal;
            michal = {};
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = zuuluu[verify];
            golfie = yankee.bind(option)(golfie);
            offset = golfie.intl;
            golfie = offset.string;
            zuuluu = zuuluu[verify];
            zuuluu = yankee.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.ynfFaG;
            zuuluu = golfie.bind(offset)(zuuluu);
            michal['name'] = zuuluu;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            offset = zuuluu[verify];
            offset = golfie.bind(option)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            zuuluu = zuuluu[verify];
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = zuuluu.t;
            if(oscard) { _fun00008_ip = 312; continue _fun00007 }
 299:
            zuuluu = golfie.qZ1eHh;
            zuuluu = offset.bind(yankee)(zuuluu);
            _fun00008_ip = 323; continue _fun00007;
 312:
            golfie = golfie.3fRINz;
            zuuluu = offset.bind(yankee)(golfie);
 323:
            michal['desc'] = zuuluu;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.MEMBERS_WITHOUT_ROLES;
            michal['value'] = zuuluu;
            michal['disabled'] = report;
            golfie = null;
            if(!report) { _fun00008_ip = 403; continue _fun00007 }
 351:
            foxtra = _closure1_slot0;
            offset = _closure1_slot1;
            yankee = offset[verify];
            yankee = foxtra.bind(option)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = offset[verify];
            offset = foxtra.bind(option)(offset);
            offset = offset.t;
            offset = offset.j9WtHx;
            golfie = yankee.bind(romeon)(offset);
 403:
            michal['tooltipText'] = golfie;
            entity[1] = michal;
            michal = {};
            romeon = _closure1_slot0;
            golfie = _closure1_slot1;
            offset = golfie[verify];
            offset = romeon.bind(option)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            golfie = golfie[verify];
            golfie = romeon.bind(option)(golfie);
            golfie = golfie.t;
            golfie = golfie.VbSyAw;
            golfie = offset.bind(yankee)(golfie);
            michal['name'] = golfie;
            romeon = _closure1_slot0;
            golfie = _closure1_slot1;
            offset = golfie[verify];
            offset = romeon.bind(option)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            golfie = golfie[verify];
            golfie = romeon.bind(option)(golfie);
            golfie = golfie.t;
            if(oscard) { _fun00008_ip = 527; continue _fun00007 }
 514:
            oscard = golfie.jesz8f;
            oscard = offset.bind(yankee)(oscard);
            _fun00008_ip = 538; continue _fun00007;
 527:
            golfie = golfie.M6GNsL;
            oscard = offset.bind(yankee)(golfie);
 538:
            michal['desc'] = oscard;
            oscard = _closure1_slot4;
            oscard = oscard.DISABLED;
            michal['value'] = oscard;
            michal['disabled'] = report;
            zuuluu = null;
            if(!report) { _fun00008_ip = 618; continue _fun00007 }
 566:
            golfie = _closure1_slot0;
            tangon = _closure1_slot1;
            report = tangon[verify];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = tangon[verify];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.j9WtHx;
            zuuluu = report.bind(oscard)(tangon);
 618:
            michal['tooltipText'] = zuuluu;
            entity[2] = michal;
            return entity;
        }
    };
    zuuluu['generateContentFilterOptions'] = tangon;
    tangon = function() { // Original name: generateDmSpamOptions
        michal = {};
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        option = 4;
        entity = oscard[option];
        tangon = undefined;
        entity = report.bind(tangon)(entity);
        golfie = entity.intl;
        zuuluu = golfie.string;
        entity = oscard[option];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.4IaoCA;
        entity = zuuluu.bind(golfie)(entity);
        michal['name'] = entity;
        entity = oscard[option];
        entity = report.bind(tangon)(entity);
        golfie = entity.intl;
        zuuluu = golfie.string;
        entity = oscard[option];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.TgipjI;
        entity = zuuluu.bind(golfie)(entity);
        michal['desc'] = entity;
        golfie = 6;
        entity = oscard[golfie];
        entity = report.bind(tangon)(entity);
        entity = entity.DmSpamFilterV2;
        entity = entity.FRIENDS_AND_NON_FRIENDS;
        michal['value'] = entity;
        zuuluu = 2;
        entity = oscard[zuuluu];
        offset = report.bind(tangon)(entity);
        verify = offset.unsafe_getRawColor;
        entity = 'GREEN_360';
        entity = verify.bind(offset)(entity);
        michal['color'] = entity;
        entity = new Array(3);
        entity[0] = michal;
        michal = {};
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        yankee = verify.intl;
        offset = yankee.string;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.6NnX6O;
        verify = offset.bind(yankee)(verify);
        michal['name'] = verify;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        yankee = verify.intl;
        offset = yankee.string;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.+dw1qq;
        verify = offset.bind(yankee)(verify);
        michal['desc'] = verify;
        verify = oscard[golfie];
        verify = report.bind(tangon)(verify);
        verify = verify.DmSpamFilterV2;
        verify = verify.NON_FRIENDS;
        michal['value'] = verify;
        verify = oscard[zuuluu];
        yankee = report.bind(tangon)(verify);
        offset = yankee.unsafe_getRawColor;
        verify = 'YELLOW_360';
        verify = offset.bind(yankee)(verify);
        michal['color'] = verify;
        entity[1] = michal;
        michal = {};
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        yankee = verify.intl;
        offset = yankee.string;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.1tiAFx;
        verify = offset.bind(yankee)(verify);
        michal['name'] = verify;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        offset = verify.intl;
        verify = offset.string;
        option = oscard[option];
        option = report.bind(tangon)(option);
        option = option.t;
        option = option.LKTyeH;
        option = verify.bind(offset)(option);
        michal['desc'] = option;
        golfie = oscard[golfie];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.DmSpamFilterV2;
        golfie = golfie.DISABLED;
        michal['value'] = golfie;
        zuuluu = oscard[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.unsafe_getRawColor;
        zuuluu = 'RED_400';
        zuuluu = tangon.bind(report)(zuuluu);
        michal['color'] = zuuluu;
        entity[2] = michal;
        return entity;
    };
    zuuluu['generateDmSpamOptions'] = tangon;
    michal = function() { // Original name: generateExplicitImageOptions
        michal = {};
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        option = 4;
        zuuluu = oscard[option];
        tangon = undefined;
        zuuluu = report.bind(tangon)(zuuluu);
        verify = zuuluu.intl;
        golfie = verify.string;
        zuuluu = oscard[option];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.PhNlh4;
        zuuluu = golfie.bind(verify)(zuuluu);
        michal['name'] = zuuluu;
        zuuluu = oscard[option];
        zuuluu = report.bind(tangon)(zuuluu);
        verify = zuuluu.intl;
        golfie = verify.string;
        zuuluu = oscard[option];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.Fw+Lvr;
        zuuluu = golfie.bind(verify)(zuuluu);
        michal['desc'] = zuuluu;
        golfie = _closure1_slot5;
        entity = golfie.FRIENDS_AND_NON_FRIENDS;
        michal['value'] = entity;
        zuuluu = 2;
        entity = oscard[zuuluu];
        offset = report.bind(tangon)(entity);
        verify = offset.unsafe_getRawColor;
        entity = 'GREEN_360';
        entity = verify.bind(offset)(entity);
        michal['color'] = entity;
        entity = new Array(3);
        entity[0] = michal;
        michal = {};
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        yankee = verify.intl;
        offset = yankee.string;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.8ioJ4e;
        verify = offset.bind(yankee)(verify);
        michal['name'] = verify;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        yankee = verify.intl;
        offset = yankee.string;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.z4l4Cg;
        verify = offset.bind(yankee)(verify);
        michal['desc'] = verify;
        verify = golfie.NON_FRIENDS;
        michal['value'] = verify;
        verify = oscard[zuuluu];
        yankee = report.bind(tangon)(verify);
        offset = yankee.unsafe_getRawColor;
        verify = 'YELLOW_360';
        verify = offset.bind(yankee)(verify);
        michal['color'] = verify;
        entity[1] = michal;
        michal = {};
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        yankee = verify.intl;
        offset = yankee.string;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.FLfuhI;
        verify = offset.bind(yankee)(verify);
        michal['name'] = verify;
        verify = oscard[option];
        verify = report.bind(tangon)(verify);
        offset = verify.intl;
        verify = offset.string;
        option = oscard[option];
        option = report.bind(tangon)(option);
        option = option.t;
        option = option.MoZlaG;
        option = verify.bind(offset)(option);
        michal['desc'] = option;
        golfie = golfie.DISABLED;
        michal['value'] = golfie;
        zuuluu = oscard[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.unsafe_getRawColor;
        zuuluu = 'RED_400';
        zuuluu = tangon.bind(report)(zuuluu);
        michal['color'] = zuuluu;
        entity[2] = michal;
        return entity;
    };
    zuuluu['generateExplicitImageOptions'] = michal;
    return entity;
})();