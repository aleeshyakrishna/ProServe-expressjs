import { Provider, Service, Booking } from "./models";

const provider: Provider = {
    id: "s0",
    name: "John Services",
    email: "john@services.com",
    role: "PROVIDER",
    isActive: true,
    createdAt: new Date(),
    servicesOffered: ["s1"],
    rating: 4.5,
};

const service: Service = {
    id: "s1",
    title: "Home Cleaning",
    description: "Deep home cleaning service",
    category: "CLEANING",
    price: 1500,
    providerId: provider.id,
    isAvailable: true,
};

const booking: Booking = {
    id: "b1",
    userId: "u1",
    serviceId: service.id,
    scheduledAt: new Date(),
    status: "PENDING",
    createdAt: new Date(),
};

console.log({ provider, service, booking });