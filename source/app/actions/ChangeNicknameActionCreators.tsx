// app/actions/ChangeNicknameActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot3 = mike;
    mike = {};
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: changeNickname
        oscar = argCorge;
        mike = argBar;
        var _closure2_slot0 = mike;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        verify = _closure1_slot3;
        options = verify.GUILD_MEMBER_NICK;
        golf = argFoo;
        report = argBaz;
        report = options.bind(verify)(golf, report);
        mike['url'] = report;
        report = {};
        report['nick'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun71366: for(var _fun71366_ip = 0; ; ) switch(_fun71366_ip) {
 0:
                entity = argFoo;
                entity = entity.body;
                entity = entity.nick;
                _closure2_slot1 = entity;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.sendBotMessage;
                zulu = _closure2_slot0;
                golf = _closure2_slot1;
                mike = null;
                if(!(mike != golf)) { _fun71366_ip = 78; continue _fun71366 }
 66:
                golf = _closure2_slot1;
                mike = '';
                if(!(mike === golf)) { _fun71366_ip = 135; continue _fun71366 }
 78:
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                mike = 3;
                golf = yankee[mike];
                golf = verify.bind(entity)(golf);
                options = golf.intl;
                golf = options.string;
                mike = yankee[mike];
                mike = verify.bind(entity)(mike);
                mike = mike.t;
                mike = mike.Vhpd9P;
                mike = golf.bind(options)(mike);
                _fun71366_ip = 203; continue _fun71366;
 135:
                golf = _closure1_slot0;
                yankee = _closure1_slot2;
                oscar = 3;
                options = yankee[oscar];
                options = golf.bind(entity)(options);
                verify = options.intl;
                options = verify.formatToMarkdownString;
                oscar = yankee[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.t;
                golf = oscar.gz+HRk;
                oscar = {};
                offset = _closure2_slot1;
                oscar['nick'] = offset;
                mike = options.bind(verify)(golf, oscar);
 203:
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        entity = function(argFoo) {
            _fun71367: for(var _fun71367_ip = 0; ; ) switch(_fun71367_ip) {
 0:
                entity = argFoo;
                mike = entity.status;
                entity = 403;
                if(!(entity !== mike)) { _fun71367_ip = 115; continue _fun71367 }
 18:
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                mike = 2;
                mike = verify[mike];
                options = undefined;
                tango = zulu.bind(options)(mike);
                zulu = tango.sendBotMessage;
                mike = _closure2_slot0;
                golf = _closure1_slot0;
                entity = 3;
                report = verify[entity];
                report = golf.bind(options)(report);
                oscar = report.intl;
                report = oscar.string;
                entity = verify[entity];
                entity = golf.bind(options)(entity);
                entity = entity.t;
                entity = entity.5LO/Sk;
                entity = report.bind(oscar)(entity);
                entity = zulu.bind(tango)(mike, entity);
                _fun71367_ip = 214; continue _fun71367;
 115:
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                mike = 2;
                mike = verify[mike];
                options = undefined;
                tango = zulu.bind(options)(mike);
                zulu = tango.sendBotMessage;
                mike = _closure2_slot0;
                report = _closure1_slot0;
                entity = 3;
                oscar = verify[entity];
                oscar = report.bind(options)(oscar);
                golf = oscar.intl;
                oscar = golf.formatToMarkdownString;
                entity = verify[entity];
                entity = report.bind(options)(entity);
                entity = entity.t;
                report = entity.Izf9jI;
                entity = {};
                entity = oscar.bind(golf)(report, entity);
                entity = zulu.bind(tango)(mike, entity);
 214:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['changeNickname'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ChangeNicknameActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();