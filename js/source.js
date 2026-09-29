$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]

    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#notification-num").text(notifAmt);

    let salesRowsHtml = "";
    $.each(sales, function (index, item){
        salesRowsHtml += `<tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.revenue}</td>
        </tr>`;
    });

    $("<tbody>").html(salesRowsHtml).appendTo("#salesTable");

    let activityHtml = "";
    $.each(activities, function (index, item){
        activityHtml += `<li>${item.message}</li>`;
    });
    $("#activity-list").html(activityHtml);

    function buildCustomerRow(cust) {
        let statusClass = cust.status.toLowerCase() === "active" ? "status-active" : "status-pending";
        return `<tr>
            <td>${cust.name}</td>
            <td>${cust.email}</td>
            <td><span class="status ${statusClass}">${cust.status}</span></td>
            <td>${cust.joined}</td>
        </tr>`;
    }

    let customerRowsHtml = "";
    $.each(customers, function (index, cust) {
        customerRowsHtml += buildCustomerRow(cust);
    });
    $("#customerTableBody").html(customerRowsHtml);

    // The following statusHtml, notificationHtml, and tasksHtml all are part of the accordion
    let statusHtml = "";
    $.each(messages, function (index, item) {
        statusHtml += `<li>${item.messsage}</li>`;
    });
    $("#system-status-list").html(statusHtml);

    let notificationHtml = "";
    $.each(notifications, function (index, item) {
        notificationHtml += `<li>${item.messsage}</li>`;
    });
    $("#notifications-list").html(notificationHtml);
   
    let tasksHtml = "";
    $.each(tasks, function (index, item) {
        tasksHtml += `<li>${item.messsage}</li>`;
    });
    $("#tasks-list").html(tasksHtml);

    // The creation of the buttons

    $("button").button();
   
    $("#dashboardTabs").tabs();
   

    $("#accordion").accordion({  //The jquery for the accordion for statusHtml, notificaitonHtml, and tasksHtml
        collapsible: true,
        heightStyle: "content"
    });

    $("#customerDate").datepicker({ //the jquery
        dateFormat: "mm/dd/yy"
    });

    let $dialog =$("#customerDialog").dialog({
        autoOpen:false,
        modal: true,
        width: 450, //check if needed adjusting
        buttons: { //need to check if this covers everything
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {
                        alert("Please enter a name and email.");
                        return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
                },
            "Cancel": function() {
                $(this).dialog("close");
            }
        }
    });

    $("#newCustomerButton").on("click", function () { // the jqulery
        $dialog.dialog("open");
    });

});
