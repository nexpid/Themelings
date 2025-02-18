// app/actions/ChangeNicknameActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot3 = michal;
    michal = {};
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: changeNickname
        oscard = argCor;
        michal = argBar;
        var _closure2_slot0 = michal;
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.patch;
        michal = {};
        verify = _closure1_slot3;
        option = verify.GUILD_MEMBER_NICK;
        golfie = argFoo;
        report = argBaz;
        report = option.bind(verify)(golfie, report);
        michal['url'] = report;
        report = {};
        report['nick'] = oscard;
        michal['body'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        report = false;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                entity = entity.body;
                entity = entity.nick;
                _closure2_slot1 = entity;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.sendBotMessage;
                zuuluu = _closure2_slot0;
                golfie = _closure2_slot1;
                michal = null;
                if(!(michal != golfie)) { _fun00002_ip = 78; continue _fun00001 }
 66:
                golfie = _closure2_slot1;
                michal = '';
                if(!(michal === golfie)) { _fun00002_ip = 137; continue _fun00001 }
 78:
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                michal = 3;
                golfie = yankee[michal];
                golfie = verify.bind(entity)(golfie);
                option = golfie.intl;
                golfie = option.string;
                michal = yankee[michal];
                michal = verify.bind(entity)(michal);
                michal = michal.t;
                michal = michal.Vhpd9P;
                michal = golfie.bind(option)(michal);
                _fun00002_ip = 207; continue _fun00001;
 137:
                golfie = _closure1_slot0;
                yankee = _closure1_slot2;
                oscard = 3;
                option = yankee[oscard];
                option = golfie.bind(entity)(option);
                verify = option.intl;
                option = verify.formatToMarkdownString;
                oscard = yankee[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.t;
                golfie = oscard.gz+HRk;
                oscard = {};
                offset = _closure2_slot1;
                oscard['nick'] = offset;
                michal = option.bind(verify)(golfie, oscard);
 207:
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                michal = entity.status;
                entity = 403;
                if(!(entity !== michal)) { _fun00004_ip = 115; continue _fun00003 }
 18:
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                michal = 2;
                michal = verify[michal];
                option = undefined;
                tangon = zuuluu.bind(option)(michal);
                zuuluu = tangon.sendBotMessage;
                michal = _closure2_slot0;
                golfie = _closure1_slot0;
                entity = 3;
                report = verify[entity];
                report = golfie.bind(option)(report);
                oscard = report.intl;
                report = oscard.string;
                entity = verify[entity];
                entity = golfie.bind(option)(entity);
                entity = entity.t;
                entity = entity.5LO/Sk;
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(michal, entity);
                _fun00004_ip = 214; continue _fun00003;
 115:
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                michal = 2;
                michal = verify[michal];
                option = undefined;
                tangon = zuuluu.bind(option)(michal);
                zuuluu = tangon.sendBotMessage;
                michal = _closure2_slot0;
                report = _closure1_slot0;
                entity = 3;
                oscard = verify[entity];
                oscard = report.bind(option)(oscard);
                golfie = oscard.intl;
                oscard = golfie.formatToMarkdownString;
                entity = verify[entity];
                entity = report.bind(option)(entity);
                entity = entity.t;
                report = entity.Izf9jI;
                entity = {};
                entity = oscard.bind(golfie)(report, entity);
                entity = zuuluu.bind(tangon)(michal, entity);
 214:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['changeNickname'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/ChangeNicknameActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();